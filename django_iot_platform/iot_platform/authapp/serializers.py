from djoser.serializers import UserCreateSerializer, UserSerializer
from rest_framework import serializers
# from django.contrib.auth.models import User
# from .models import User
from django.contrib.auth import get_user_model
User = get_user_model()


class UserCreateSerializer(UserCreateSerializer):
    class Meta(UserCreateSerializer.Meta):
        model = User
        fields = ('email', 'username', 'password', 'first_name', 'last_name')
