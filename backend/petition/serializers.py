from rest_framework import serializers
from .models import Petition


class PetitionSerializer(serializers.ModelSerializer):

    class Meta:
        model = Petition
        fields = ['name', 'description', 'status',
                  'start_at', 'end_date', 'target_signature_counter', 'contact_info']


class PetitionStatusUpdateSerializer(serializers.ModelSerializer):
    status = serializers.CharField(max_length=25)

    class Meta:
        model = Petition
        fields = ['status']
