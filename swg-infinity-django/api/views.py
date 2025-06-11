from django.shortcuts import render
from django.contrib.auth.models import User
from django.utils import timezone
from rest_framework import viewsets, status, permissions
from rest_framework.decorators import api_view, action
from rest_framework.response import Response
from rest_framework.views import APIView
from django.db.models import Q, Count, Avg
from .models import ServerStatus, ServerConfiguration, GameSession, PlayerStats
from .serializers import (
    UserSerializer, UserPublicSerializer, ServerStatusSerializer,
    ServerConfigurationSerializer, GameSessionSerializer, 
    GameSessionCreateSerializer, PlayerStatsSerializer, PlayerStatsPublicSerializer
)

@api_view(["GET"])
def health_check(request):
    """Simple health check endpoint"""
    return Response({
        "status": "healthy",
        "message": "SWG Infinity Django API is running",
        "version": "1.0.0",
        "timestamp": timezone.now()
    }, status=status.HTTP_200_OK)

class UserViewSet(viewsets.ModelViewSet):
    """ViewSet for User model with full CRUD operations"""
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [permissions.AllowAny]  # Adjust as needed for production
    
    def get_serializer_class(self):
        """Use different serializers for different actions"""
        if self.action in ['list', 'retrieve'] and not self.request.user.is_staff:
            return UserPublicSerializer
        return UserSerializer
    
    @action(detail=False, methods=['get'])
    def online_players(self, request):
        """Get list of currently online players"""
        # For simplified version, return active sessions
        active_sessions = GameSession.objects.filter(is_active=True, logout_time__isnull=True)
        users = [session.user for session in active_sessions]
        serializer = UserPublicSerializer(users, many=True)
        return Response({
            'count': len(users),
            'players': serializer.data
        })

class ServerStatusViewSet(viewsets.ModelViewSet):
    """ViewSet for ServerStatus model"""
    queryset = ServerStatus.objects.all()
    serializer_class = ServerStatusSerializer
    permission_classes = [permissions.AllowAny]
    
    @action(detail=False, methods=['get'])
    def current_status(self, request):
        """Get the most recent server status"""
        try:
            latest_status = ServerStatus.objects.latest('updated_at')
            serializer = self.get_serializer(latest_status)
            return Response(serializer.data)
        except ServerStatus.DoesNotExist:
            return Response({
                'error': 'No server status found'
            }, status=status.HTTP_404_NOT_FOUND)
    
    @action(detail=False, methods=['post'])
    def update_status(self, request):
        """Create or update server status"""
        # Get the latest status or create new one
        latest_status = ServerStatus.objects.first()
        
        if latest_status:
            serializer = self.get_serializer(latest_status, data=request.data, partial=True)
        else:
            serializer = self.get_serializer(data=request.data)
        
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class ServerConfigurationViewSet(viewsets.ModelViewSet):
    """ViewSet for ServerConfiguration model"""
    queryset = ServerConfiguration.objects.all()
    serializer_class = ServerConfigurationSerializer
    permission_classes = [permissions.AllowAny]  # Restrict in production
    
    @action(detail=False, methods=['get'])
    def active_configs(self, request):
        """Get only active configurations"""
        active_configs = ServerConfiguration.objects.filter(is_active=True)
        serializer = self.get_serializer(active_configs, many=True)
        return Response(serializer.data)
    
    @action(detail=True, methods=['post'])
    def toggle_active(self, request, pk=None):
        """Toggle configuration active status"""
        config = self.get_object()
        config.is_active = not config.is_active
        config.save()
        
        serializer = self.get_serializer(config)
        return Response(serializer.data)

class GameSessionViewSet(viewsets.ModelViewSet):
    """ViewSet for GameSession model"""
    queryset = GameSession.objects.all()
    serializer_class = GameSessionSerializer
    permission_classes = [permissions.AllowAny]
    
    def get_serializer_class(self):
        """Use different serializers for different actions"""
        if self.action == 'create':
            return GameSessionCreateSerializer
        return GameSessionSerializer
    
    @action(detail=False, methods=['get'])
    def active_sessions(self, request):
        """Get all currently active game sessions"""
        active_sessions = GameSession.objects.filter(is_active=True, logout_time__isnull=True)
        serializer = self.get_serializer(active_sessions, many=True)
        return Response({
            'count': active_sessions.count(),
            'sessions': serializer.data
        })
    
    @action(detail=False, methods=['get'])
    def user_sessions(self, request):
        """Get sessions for a specific user"""
        user_id = request.query_params.get('user_id')
        if not user_id:
            return Response({'error': 'user_id parameter required'}, 
                          status=status.HTTP_400_BAD_REQUEST)
        
        sessions = GameSession.objects.filter(user_id=user_id)
        serializer = self.get_serializer(sessions, many=True)
        return Response(serializer.data)
    
    @action(detail=True, methods=['post'])
    def end_session(self, request, pk=None):
        """End a game session"""
        session = self.get_object()
        session.logout_time = timezone.now()
        session.is_active = False
        session.save()
        
        # Update user online status
        session.user.is_online = False
        session.user.save()
        
        serializer = self.get_serializer(session)
        return Response(serializer.data)

class PlayerStatsViewSet(viewsets.ModelViewSet):
    """ViewSet for PlayerStats model"""
    queryset = PlayerStats.objects.all()
    serializer_class = PlayerStatsSerializer
    permission_classes = [permissions.AllowAny]
    
    @action(detail=False, methods=['get'])
    def leaderboard(self, request):
        """Get player leaderboard by various metrics"""
        metric = request.query_params.get('metric', 'level')
        limit = int(request.query_params.get('limit', 10))
        
        valid_metrics = ['level', 'experience_points', 'credits_earned', 'pvp_kills']
        if metric not in valid_metrics:
            return Response({
                'error': f'Invalid metric. Valid options: {valid_metrics}'
            }, status=status.HTTP_400_BAD_REQUEST)
        
        top_players = PlayerStats.objects.order_by(f'-{metric}')[:limit]
        serializer = PlayerStatsPublicSerializer(top_players, many=True)
        
        return Response({
            'metric': metric,
            'leaderboard': serializer.data
        })
    
    @action(detail=False, methods=['get'])
    def statistics(self, request):
        """Get server-wide statistics"""
        total_players = PlayerStats.objects.count()
        avg_level = PlayerStats.objects.aggregate(avg_level=Avg('level'))['avg_level'] or 0
        total_sessions = GameSession.objects.count()
        active_sessions = GameSession.objects.filter(is_active=True).count()
        
        return Response({
            'total_players': total_players,
            'average_level': round(avg_level, 1),
            'total_sessions': total_sessions,
            'active_sessions': active_sessions,
            'online_players': User.objects.filter(is_online=True).count()
        })

class DashboardAPIView(APIView):
    """Comprehensive dashboard API with server and player data"""
    permission_classes = [permissions.AllowAny]
    
    def get(self, request):
        """Get dashboard data"""
        # Server status
        try:
            server_status = ServerStatus.objects.latest('updated_at')
            server_data = ServerStatusSerializer(server_status).data
        except ServerStatus.DoesNotExist:
            server_data = None
        
        # Player statistics
        total_players = User.objects.count()
        online_players = User.objects.filter(is_online=True).count()
        active_sessions = GameSession.objects.filter(is_active=True).count()
        
        # Recent sessions
        recent_sessions = GameSession.objects.order_by('-login_time')[:5]
        recent_sessions_data = GameSessionSerializer(recent_sessions, many=True).data
        
        # Top players
        top_players = PlayerStats.objects.order_by('-level')[:5]
        top_players_data = PlayerStatsPublicSerializer(top_players, many=True).data
        
        return Response({
            'server_status': server_data,
            'player_counts': {
                'total_players': total_players,
                'online_players': online_players,
                'active_sessions': active_sessions
            },
            'recent_sessions': recent_sessions_data,
            'top_players': top_players_data,
            'timestamp': timezone.now()
        })