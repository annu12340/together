from rest_framework import serializers
from .models import Campaign


class CampaignSerializer(serializers.ModelSerializer):

    class Meta:
        model = Campaign
        fields = '__all__'


class CampaignStatusUpdateSerializer(serializers.ModelSerializer):
    status = serializers.CharField(max_length=25)

    class Meta:
        model = Campaign
        fields = ['status']


# class CampaignLikesUpdateSerializer(serializers.ModelSerializer):
#     like = serializers.IntegerField()

#     class Meta:
#         model = Campaign
#         fields = ['likes']
