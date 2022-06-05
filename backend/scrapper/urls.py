from django.urls import path
from . import views

urlpatterns = [
    path('', views.ScrapperView.as_view()),
]
