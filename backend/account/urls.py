# from django.conf.urls import url
from django.urls import path, include
from .api import RegisterApi, send_otp

urlpatterns = [
    path('api/register', RegisterApi.as_view()),
    path('otp', send_otp)
]
