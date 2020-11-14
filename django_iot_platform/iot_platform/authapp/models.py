from django.db import models

from django.contrib.auth.models import AbstractUser


class User(AbstractUser):
    email = models.EmailField(max_length=255, unique=True)
    phone = models.CharField(null=True, max_length=50)

    USERNAME_FIELD = 'email'
    EMAIL_FIELD = 'email'
    REQUIRED_FIELDS = ['username', 'first_name', 'last_name']


class Sensor(models.Model):
    id = models.CharField(primary_key=True, max_length=50)
    user = models.ForeignKey(User, on_delete=models.CASCADE, null=True)
    parent = models.ForeignKey(
        'self', on_delete=models.CASCADE, null=True, related_name='parent_sensor')
    root = models.ForeignKey(
        'self', on_delete=models.CASCADE, null=True, related_name='root_sensor')
    created_on = models.DateTimeField(auto_now_add=True)
