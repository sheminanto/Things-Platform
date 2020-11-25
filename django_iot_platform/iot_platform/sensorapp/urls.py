from django.urls import path, include
from .views import SensorViewSet, SensorDataViewSet

# from rest_framework import routers


app_name = "sensorapp"

# router = routers.DefaultRouter()

# router.register(r'sensors', SensorViewSet)


urlpatterns = [
    path('sensors/',
         SensorViewSet.as_view({'get': 'list', 'post': 'create', 'patch': 'update', 'delete': 'destroy'}), name="sensors"),
    path(
        'data/', SensorDataViewSet.as_view({'get': 'list', 'post': 'create'}), name='sensor_data')

]
