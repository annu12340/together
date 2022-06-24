import os
import string
import random
from django.shortcuts import render, redirect
from rest_framework import generics, status
from rest_framework.response import Response
from .serializer import RegisterSerializer, UserSerializer
from twilio.rest import Client
from django.http import HttpResponse
from rest_framework.decorators import api_view, renderer_classes
from rest_framework.renderers import JSONRenderer, TemplateHTMLRenderer
from django.views.decorators.csrf import csrf_exempt
from .config import config_account_sid, config_auth_token

random_chars = ''


def generate_otp():
    return ''.join(random.choices(
        string.ascii_uppercase + string.digits, k=7))


@csrf_exempt
@api_view(('GET', 'POST'))
@ renderer_classes((TemplateHTMLRenderer, JSONRenderer))
def send_otp(request):
    global random_chars
    if request.method == 'POST':
        if random_chars == request.data['otp']:
            print("request.data", request.data['otp'], random_chars,
                  random_chars == request.data['otp'])
            return redirect('http://localhost:3000/login')

    else:
        random_chars = generate_otp()
        print("get request", random_chars)
        account_sid = config_account_sid
        auth_token = config_auth_token
        client = Client(account_sid, auth_token)
        client.messages.create(
            body='\n\n\n  Welcome to Together. \n Your otp is '+random_chars,
            from_='+17622093494', to='+919188058865'
        )
        return Response(data=random_chars, status=status.HTTP_200_OK)


class RegisterApi(generics.GenericAPIView):
    serializer_class = RegisterSerializer

    def post(self, request, *args,  **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.save()
        return Response({
            "user": UserSerializer(user,    context=self.get_serializer_context()).data,
            "message": "User Created Successfully.  Now perform Login to get your token",
        })
