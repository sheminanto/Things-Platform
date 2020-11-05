from django.urls import path, include
from . import views


app_name = "reactapp"

urlpatterns = [
    path("", views.index, name="index"),

]
