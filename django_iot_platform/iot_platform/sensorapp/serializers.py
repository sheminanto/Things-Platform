
from rest_framework import serializers
from .models import SensorModel


class SensorSerializer(serializers.ModelSerializer):
    class Meta:
        model = SensorModel
        fields = ['id', 'parent', 'root', 'user', 'created_on']
