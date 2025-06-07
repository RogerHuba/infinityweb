from django.db import models
from django.contrib.auth.models import User
from django.utils import timezone

class ServerStatus(models.Model):
    """Model to track server health and status"""
    STATUS_CHOICES = [
        ('online', 'Online'),
        ('offline', 'Offline'),
        ('maintenance', 'Maintenance'),
        ('starting', 'Starting'),
    ]
    
    server_name = models.CharField(max_length=100, default="SWG Infinity")
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='offline')
    player_count = models.IntegerField(default=0)
    max_players = models.IntegerField(default=1000)
    uptime = models.DurationField(default=timezone.timedelta(0))
    last_restart = models.DateTimeField(auto_now_add=True)
    cpu_usage = models.FloatField(default=0.0, help_text="CPU usage percentage")
    memory_usage = models.FloatField(default=0.0, help_text="Memory usage percentage")
    message_of_the_day = models.TextField(blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    class Meta:
        ordering = ['-updated_at']
        verbose_name = "Server Status"
        verbose_name_plural = "Server Statuses"
    
    def __str__(self):
        return f"{self.server_name} - {self.status} ({self.player_count}/{self.max_players})"

class ServerConfiguration(models.Model):
    """Model to store server configuration settings"""
    setting_name = models.CharField(max_length=100, unique=True)
    setting_value = models.TextField()
    description = models.TextField(blank=True, null=True)
    is_active = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    class Meta:
        ordering = ['setting_name']
    
    def __str__(self):
        return f"{self.setting_name}: {self.setting_value[:50]}"

class GameSession(models.Model):
    """Model to track active game sessions"""
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='game_sessions')
    character_name = models.CharField(max_length=50)
    login_time = models.DateTimeField(auto_now_add=True)
    logout_time = models.DateTimeField(null=True, blank=True)
    is_active = models.BooleanField(default=True)
    ip_address = models.GenericIPAddressField(null=True, blank=True)
    location_x = models.FloatField(null=True, blank=True)
    location_y = models.FloatField(null=True, blank=True)
    location_z = models.FloatField(null=True, blank=True)
    planet = models.CharField(max_length=50, null=True, blank=True)
    
    class Meta:
        ordering = ['-login_time']
    
    def __str__(self):
        return f"{self.character_name} - {self.login_time}"
    
    @property
    def session_duration(self):
        """Calculate session duration"""
        end_time = self.logout_time or timezone.now()
        return end_time - self.login_time

class PlayerStats(models.Model):
    """Model to track player statistics"""
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name='stats')
    total_sessions = models.IntegerField(default=0)
    total_playtime = models.DurationField(default=timezone.timedelta(0))
    last_seen = models.DateTimeField(auto_now=True)
    favorite_planet = models.CharField(max_length=50, null=True, blank=True)
    credits_earned = models.BigIntegerField(default=0)
    experience_points = models.BigIntegerField(default=0)
    level = models.IntegerField(default=1)
    guild_name = models.CharField(max_length=100, null=True, blank=True)
    pvp_kills = models.IntegerField(default=0)
    pvp_deaths = models.IntegerField(default=0)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    class Meta:
        verbose_name = "Player Stats"
        verbose_name_plural = "Player Stats"
    
    def __str__(self):
        return f"{self.user.username} - Level {self.level}"
    
    @property
    def kd_ratio(self):
        """Calculate Kill/Death ratio"""
        if self.pvp_deaths == 0:
            return self.pvp_kills
        return round(self.pvp_kills / self.pvp_deaths, 2)