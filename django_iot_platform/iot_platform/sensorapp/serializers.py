
from rest_framework import serializers
from .models import SensorModel, SensorDataModel


# Should change this to serializers.Serializer
class SensorSerializer(serializers.ModelSerializer):

    # id = serializers.SerializerMethodField(read_only=True)
    # parent = serializers.SerializerMethodField(read_only=True)
    # root = serializers.SerializerMethodField(read_only=True)
    # user = serializers.SerializerMethodField(read_only=True)
    # created_on = serializers.SerializerMethodField(read_only=True)

    # user = serializers.ReadOnlyField(source='user.username')

    class Meta:
        model = SensorModel
        fields = ['id', 'parent', 'root', 'created_on']
        # flields = '__all__'
        # extra_kwargs = {'id': {'required': True}}


class SensorDataSerializer(serializers.ModelSerializer):
    class Meta:
        model = SensorDataModel
        fields = '__all__'
