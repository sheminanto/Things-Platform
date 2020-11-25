from django.shortcuts import render

# Create your views here.




# from rest_framework.views import APIView
# from rest_framework.authentication import SessionAuthentication
from rest_framework.response import Response


# class CheckAuth(APIView):
#     authentication_classes = [SessionAuthentication]
#     def get(self, request):
#         return Response({'detail': 'You\'re Authenticated'})

# import json
# from django.contrib.auth import authenticate, login
# from django.views.decorators.http import require_POST
# from django.views.decorators.csrf import ensure_csrf_cookie
# from django.http import JsonResponse


# @ensure_csrf_cookie
# def set_csrf_token(request):
#     """
#     This will be `/api/set-csrf-cookie/` on `urls.py`
#     """
#     return JsonResponse({"details": "CSRF cookie set"})


# @require_POST
# def login_view(request):
#     """
#     This will be `/api/login/` on `urls.py`
#     """
#     data = json.loads(request.body)
#     username = data.get('username')
#     password = data.get('password')
#     if username is None or password is None:
#         return JsonResponse({
#             "errors": {
#                 "__all__": "Please enter both username and password"
#             }
#         }, status=400)
#     user = authenticate(username=username, password=password)
#     if user is not None:
#         login(request, user)
#         return JsonResponse({"detail": "Success"})
#     return JsonResponse(
#         {"detail": "Invalid credentials"},
#         status=400,
#     )


from rest_framework.authentication import SessionAuthentication, BasicAuthentication
from rest_framework.permissions import IsAuthenticated
from rest_framework.views import APIView
from rest_framework.decorators import api_view,authentication_classes,permission_classes
from django.http import HttpResponse

class ExampleView(APIView):
    authentication_classes = [SessionAuthentication]
    permission_classes = [IsAuthenticated]
    def get(self, request, format=None):
        return HttpResponse("Authenticated")

@api_view(['GET'])
@authentication_classes([SessionAuthentication,])
@permission_classes([IsAuthenticated,])
def example_view(request, format=None):
    # content = {
    #     'user': unicode(request.user),  # `django.contrib.auth.User` instance.
    #     'auth': unicode(request.auth),  # None
    # }
    # return Response(content)
    return Response('{"Authentication":"Success"}')

from django.contrib.auth import authenticate, login

def my_view(request):
    username = request.POST['username']
    password = request.POST['password']
    user = authenticate(request, username=username, password=password)
    if user is not None:
        login(request, user)
        return HttpResponse("Authenticated")
    else:
        return HttpResponse("Failed")
        
       