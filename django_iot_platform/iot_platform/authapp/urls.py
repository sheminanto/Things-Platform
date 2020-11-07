from django.urls import path, include
from .views import *

from  django.contrib.auth.views import LoginView

app_name = "authapp"

urlpatterns = [
    # path("", views.homepage, name="homepage"),

    path('', include('djoser.urls')),
    path('', include('djoser.urls.authtoken')),
    
    # path('set-csrf/', set_csrf_token, name='Set-CSRF'),
    # path('login/', login_view, name='Login'),
    # path('test-auth/', CheckAuth.as_view(), name='Test-Auth')
    path('login/',LoginView.as_view(
            template_name='authapp/login.html'
        ), 
        name="login"),
    path('exampleview/',ExampleView.as_view()),
    path('exampleview1/',example_view),

]
