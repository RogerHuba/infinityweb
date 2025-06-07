from django.urls import path, include
from rest_framework.routers import DefaultRouter
from . import views

# Create a router and register our viewsets with it
router = DefaultRouter()
router.register(r'users', views.UserViewSet)
router.register(r'server-status', views.ServerStatusViewSet)
router.register(r'server-config', views.ServerConfigurationViewSet)
router.register(r'game-sessions', views.GameSessionViewSet)
router.register(r'player-stats', views.PlayerStatsViewSet)

urlpatterns = [
    path('health/', views.health_check, name='health-check'),
    path('dashboard/', views.DashboardAPIView.as_view(), name='dashboard'),
    path('', include(router.urls)),
]
