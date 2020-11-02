from djoser.serializers import UserCreateSerializer, UserSerializer
from rest_framework import serializers
# from django.contrib.auth.models import User
# from .models import User
from django.db import models
from django.contrib.auth import get_user_model
User = get_user_model()


class UserCreateSerializer(UserCreateSerializer):
    class Meta(UserCreateSerializer.Meta):
        email = models.EmailField(
            verbose_name='email', max_length=255, unique=True)
        model = User
        fields = ('email', 'username', 'password', 'first_name', 'last_name')
        USERNAME_FIELD = 'email'
