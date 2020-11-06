from django.urls import path, include, re_path
from . import views


app_name = "reactapp"

urlpatterns = [
    path("", views.index, name="index"),
    re_path(r'^(?:.*)/?$', views.index),

]
