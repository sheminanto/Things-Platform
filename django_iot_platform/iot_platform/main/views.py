from django.shortcuts import render
from django.http import HttpResponse
from rest_framework import viewsets
from .serializers import HeroSerializer, UserSerializer
from .models import Hero
from django.contrib.auth.models import User

# Create your views here.
from django.utils import timezone

# Tutorial
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from datetime import datetime


def homepage(request):
    return HttpResponse("hello World")


@api_view(['GET'])
def checkserver(request):
    date = datetime.now().strftime("%d/%m/%Y %H:%M:%S")
    message = 'Server is Live, Current Time is '
    return Response(data=message+date, status=status.HTTP_200_OK)


class HeroViewSet(viewsets.ModelViewSet):
    queryset = Hero.objects.all().order_by('name')
    serializer_class = HeroSerializer


class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
