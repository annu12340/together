from django.shortcuts import render, redirect
from rest_framework import generics, status
from rest_framework.response import Response
from .serializer import RegisterSerializer, UserSerializer
from twilio.rest import Client

from django.http import HttpResponse, HttpResponseRedirect, JsonResponse
import os
import string
import random
from rest_framework.decorators import api_view, renderer_classes
from rest_framework.renderers import JSONRenderer, TemplateHTMLRenderer
from django.views.decorators.csrf import csrf_exempt


random_chars = ''


@csrf_exempt
@api_view(('GET', 'POST'))
@ renderer_classes((TemplateHTMLRenderer, JSONRenderer))
def generate_otp(request):
    # Initialze random_chars only once
    random_chars = ''.join(random.choices(
        string.ascii_uppercase + string.digits, k=7))
    print(random_chars, 'random')
    if request.method == 'POST':
        print(random_chars, 'random')
        # print("request.data", request.data['otp'], random_chars,
        #       random_chars == request.data['otp'])
        # if random_chars == request.data['otp']:
        #     print("dsa")
        #     return redirect('/login')
        if random_chars:
            return Response(data=random_chars, status=status.HTTP_200_OK)

        return HttpResponse("Your response")
    else:

        account_sid = "AC5b49d12786b7b09469cfcebf63df7376"
        auth_token = "867971a152020c0e8f38af5848e5844d"
        client = Client(account_sid, auth_token)
        client.messages.create(
            body='Welcome to Together. Your otp is '+random_chars,
            from_='+19362263441', to='+919188058865'
        )
        return Response(data=random_chars, status=status.HTTP_200_OK)


# class OTPView(generics.GenericAPIView):
#     serializer_class = RegisterSerializer

#     def get(self, request):
#         otp = ''.join(random.choices(
#             string.ascii_uppercase + string.digits, k=7))
#         print('send_otp', otp)

#         account_sid = "AC5b49d12786b7b09469cfcebf63df7376"
#         auth_token = "867971a152020c0e8f38af5848e5844d"
#         client = Client(account_sid, auth_token)

#         client.messages.create(
#             body="Your otp is"+otp,
#             from_='whatsapp:+14155238886',
#             to='whatsapp:+919188058865'
#         )

#         return Response(data=otp, status=status.HTTP_200_OK)

#     def post(self, request):
#         data = request.data
#         print("data, ", data)
#         serializer = self.serializer_class(data=data)

#         if serializer.is_valid():
#             serializer.save(organiser_id=request.user.id)

#             print(f"\n {serializer.data}")

#             return Response(data=serializer.data, status=status.HTTP_201_CREATED)

#         return Response(data=serializer.errors, status=status.HTTP_400_BAD_REQUEST)


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
