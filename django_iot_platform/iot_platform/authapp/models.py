from django.db import models

from django.contrib.auth.models import AbstractUser


class User(AbstractUser):
    phone = models.CharField(null=True, max_length=50)
    REQUIRED_FIELDS = ['first_name', 'last_name']

    # USERNAME_FIELD = 'email'
