from django.db import models
from authapp.models import User

# Create your models here.


class SensorModel(models.Model):
    id = models.CharField(primary_key=True, max_length=50)
    user = models.ForeignKey(User, on_delete=models.CASCADE, null=True)
    parent = models.ForeignKey(
        'self', on_delete=models.CASCADE, null=True, related_name='parent_sensor')
    root = models.ForeignKey(
        'self', on_delete=models.CASCADE, null=True, related_name='root_sensor')
    created_on = models.DateTimeField(auto_now_add=True)
