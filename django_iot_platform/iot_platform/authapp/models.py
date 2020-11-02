from django.db import models

from django.contrib.auth.models import AbstractUser


class User(AbstractUser):
    email = models.EmailField(max_length=255, unique=True)
    phone = models.CharField(null=True, max_length=50)

    USERNAME_FIELD = 'email'
    EMAIL_FIELD = 'email'
    REQUIRED_FIELDS = ['username', 'first_name', 'last_name']
