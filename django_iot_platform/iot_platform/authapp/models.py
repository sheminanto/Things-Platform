from django.db import models

from django.contrib.auth.models import AbstractUser


class User(AbstractUser):
    email = models.EmailField(
        verbose_name='email', max_length=255, unique=True)
    phone = models.CharField(null=True, max_length=50)
    REQUIRED_FIELDS = ['first_name', 'last_name']

    # USERNAME_FIELD = 'email'
