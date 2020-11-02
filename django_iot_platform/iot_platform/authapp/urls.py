from django.urls import path, include
from authapp import views


app_name = "authapp"

urlpatterns = [
    # path("", views.homepage, name="homepage"),
    path('', include('djoser.urls')),
    path('', include('djoser.urls.authtoken')),


]
