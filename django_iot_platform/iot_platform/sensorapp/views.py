from rest_framework import viewsets


from .serializers import SensorSerializer
from .models import SensorModel


class SensorViewSet(viewsets.ModelViewSet):

    queryset = SensorModel.objects.all()
    serializer_class = SensorSerializer
