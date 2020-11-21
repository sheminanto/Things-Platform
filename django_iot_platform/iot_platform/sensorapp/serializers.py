
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
        fields = ['id', 'parent', 'root', 'created_on',
                  'tag', 'description', 'updated_on', 'is_parent', 'is_root']
        read_only_fields = ['is_parent', 'updated_on', 'created_on', 'is_root']
        # flields = '__all__'
        extra_kwargs = {'parent': {'required': True},
                        'root': {'required': True}}


class SensorUpdateSerializer(serializers.ModelSerializer):
    class Meta:
        model = SensorModel
        fields = ['tag', 'description']


class SensorDataSerializer(serializers.ModelSerializer):
    class Meta:
        model = SensorDataModel
        fields = '__all__'
        read_only_fields = ['id', 'datetime']
