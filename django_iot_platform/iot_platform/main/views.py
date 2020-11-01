from django.shortcuts import render
from django.http import HttpResponse
from rest_framework import viewsets
from .serializers import HeroSerializer
from .models import Hero

# Create your views here.
from django.utils import timezone


def homepage(request):
    return HttpResponse("hello World")


class HeroViewSet(viewsets.ModelViewSet):
    queryset = Hero.objects.all().order_by('name')
    serializer_class = HeroSerializer
