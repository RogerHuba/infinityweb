from rest_framework import serializers
from django.contrib.auth.models import User
from .models import ServerStatus, ServerConfiguration, GameSession, PlayerStats

class UserSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)
    
    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'first_name', 'last_name', 'is_active', 'date_joined', 'last_login', 'password']
        extra_kwargs = {
            'password': {'write_only': True},
            'date_joined': {'read_only': True},
            'last_login': {'read_only': True},
        }
    
    def create(self, validated_data):
        password = validated_data.pop('password')
        user = User.objects.create_user(password=password, **validated_data)
        return user

class UserPublicSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'first_name', 'last_name', 'date_joined']

class ServerStatusSerializer(serializers.ModelSerializer):
    uptime_hours = serializers.SerializerMethodField()
    player_percentage = serializers.SerializerMethodField()
    
    class Meta:
        model = ServerStatus
        fields = [
            'id', 'server_name', 'status', 'player_count', 'max_players', 'uptime', 'uptime_hours',
            'last_restart', 'cpu_usage', 'memory_usage', 'message_of_the_day', 'created_at', 'updated_at',
            'player_percentage'
        ]
        read_only_fields = ['created_at', 'updated_at']
    
    def get_uptime_hours(self, obj):
        if obj.uptime:
            return round(obj.uptime.total_seconds() / 3600, 2)
        return 0.0
    
    def get_player_percentage(self, obj):
        if obj.max_players > 0:
            return round((obj.player_count / obj.max_players) * 100, 1)
        return 0.0

class ServerConfigurationSerializer(serializers.ModelSerializer):
    class Meta:
        model = ServerConfiguration
        fields = ['id', 'setting_name', 'setting_value', 'description', 'is_active', 'created_at', 'updated_at']
        read_only_fields = ['created_at', 'updated_at']

class GameSessionSerializer(serializers.ModelSerializer):
    user_username = serializers.CharField(source='user.username', read_only=True)
    session_duration_minutes = serializers.SerializerMethodField()
    is_currently_active = serializers.SerializerMethodField()
    
    class Meta:
        model = GameSession
        fields = [
            'id', 'user', 'user_username', 'character_name', 'login_time', 'logout_time', 'is_active',
            'ip_address', 'location_x', 'location_y', 'location_z', 'planet', 'session_duration_minutes',
            'is_currently_active'
        ]
        read_only_fields = ['login_time']
    
    def get_session_duration_minutes(self, obj):
        duration = obj.session_duration
        return round(duration.total_seconds() / 60, 1)
    
    def get_is_currently_active(self, obj):
        return obj.is_active and obj.logout_time is None

class GameSessionCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = GameSession
        fields = ['user', 'character_name', 'ip_address', 'location_x', 'location_y', 'location_z', 'planet']

class PlayerStatsSerializer(serializers.ModelSerializer):
    user_username = serializers.CharField(source='user.username', read_only=True)
    total_playtime_hours = serializers.SerializerMethodField()
    kd_ratio = serializers.ReadOnlyField()
    
    class Meta:
        model = PlayerStats
        fields = [
            'id', 'user', 'user_username', 'total_sessions', 'total_playtime', 'total_playtime_hours',
            'last_seen', 'favorite_planet', 'credits_earned', 'experience_points', 'level', 'guild_name',
            'pvp_kills', 'pvp_deaths', 'kd_ratio', 'created_at', 'updated_at'
        ]
        read_only_fields = ['created_at', 'updated_at', 'last_seen']
    
    def get_total_playtime_hours(self, obj):
        if obj.total_playtime:
            return round(obj.total_playtime.total_seconds() / 3600, 2)
        return 0.0

class PlayerStatsPublicSerializer(serializers.ModelSerializer):
    user_username = serializers.CharField(source='user.username', read_only=True)
    kd_ratio = serializers.ReadOnlyField()
    
    class Meta:
        model = PlayerStats
        fields = [
            'user_username', 'level', 'credits_earned', 'experience_points', 'guild_name',
            'pvp_kills', 'pvp_deaths', 'kd_ratio'
        ]