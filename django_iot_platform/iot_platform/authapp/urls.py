from django.urls import path, include
from .views import *


app_name = "authapp"

urlpatterns = [
    # path("", views.homepage, name="homepage"),
    path('', include('djoser.urls')),
    path('', include('djoser.urls.authtoken')),

]
