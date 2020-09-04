from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.
from django.utils import timezone


def homepage(request):

    return HttpResponse("hello World")
