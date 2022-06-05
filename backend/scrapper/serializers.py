from rest_framework import serializers
from .models import Scrapper


class ScrapperSerializer(serializers.ModelSerializer):

    class Meta:
        model = Scrapper
        fields = '__all__'
