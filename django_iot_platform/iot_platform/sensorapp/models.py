from django.db import models
from authapp.models import User
import uuid


class SensorModel(models.Model):
    id = models.CharField(primary_key=True, max_length=64)
    user = models.ForeignKey(User, on_delete=models.CASCADE, null=True)
    parent = models.ForeignKey(
        'self', on_delete=models.CASCADE, null=True, related_name='parent_sensor')
    root = models.ForeignKey(
        'self', on_delete=models.CASCADE, null=True, related_name='root_sensor')
    created_on = models.DateTimeField(auto_now_add=True)
    tag = models.CharField(max_length=50, null=True)
    description = models.TextField(blank=True, null=True)


class SensorDataModel(models.Model):
    '''
    limit of integer id is a problem
    alternatives (uuid,bigautofiled,multiple pimary key)
    '''
    # id = models.BigAutoField(primary_key=True)
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    sensor = models.ForeignKey(SensorModel, on_delete=models.CASCADE)
    datetime = models.DateTimeField(auto_now_add=True,)
    data = models.DecimalField(max_digits=15, decimal_places=8)

    # class Meta:
    # db_table = 'sensordatamodel'
    # unique_together = (('sensor', 'datetime'),)


class GraphTypeModel(models.Model):
    id = models.CharField(max_length=50, primary_key=True)


class GraphsModel(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, null=True)
    name = models.CharField(max_length=50)
    graph = models.ForeignKey(GraphTypeModel, on_delete=models.CASCADE)


class GraphConfigModel(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, null=True)
    graph = models.ForeignKey(GraphsModel, on_delete=models.CASCADE)
    sensor = models.ForeignKey(SensorModel, on_delete=models.CASCADE)
