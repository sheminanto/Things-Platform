from django.urls import path, include
from .views import SensorViewSet
from rest_framework import routers


app_name = "sensorapp"

router = routers.DefaultRouter()

router.register(r'sensors', SensorViewSet)


urlpatterns = [
    path('', include(router.urls)),

]
