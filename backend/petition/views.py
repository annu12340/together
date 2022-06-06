
from rest_framework import generics, status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from django.shortcuts import get_object_or_404
from django.contrib.auth import get_user_model
from drf_yasg.utils import swagger_auto_schema
from .models import Petition
from . import serializers

User = get_user_model()


class PetitionView(generics.GenericAPIView):
    serializer_class = serializers.PetitionSerializer
    permission_classes = [IsAuthenticated]

    def get(self, request):
        petitions = Petition.objects.all()

        serializer = self.serializer_class(instance=petitions, many=True)

        return Response(data=serializer.data, status=status.HTTP_200_OK)

    def post(self, request):
        data = request.data

        serializer = self.serializer_class(data=data)

        if serializer.is_valid():
            serializer.save(organiser_id=request.user.id)

            print(f"\n {serializer.data}")

            return Response(data=serializer.data, status=status.HTTP_201_CREATED)

        return Response(data=serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class PetitionIdView(generics.GenericAPIView):
    serializer_class = serializers.PetitionSerializer
    permission_classes = [IsAuthenticated]

    def get(self, request, Petition_id):
    
        petition = get_object_or_404(Petition, pk=Petition_id)
        
        serializer = self.serializer_class(instance=petition)
        
        return Response(data=serializer.data, status=status.HTTP_200_OK)

    # @swagger_auto_schema(operation_summary="Update an Petition by its ID")
    def put(self, request, Petition_id):

        petition = get_object_or_404(Petition, pk=Petition_id)

        serializer = self.serializer_class(
            instance=petition, data=request.data)

        if serializer.is_valid():
            serializer.save()

            return Response(data=serializer.data, status=status.HTTP_200_OK)

        return Response(data=serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    # @swagger_auto_schema(operation_summary="Delete an Petition by its ID")
    def delete(self, request, Petition_id):

        petition = get_object_or_404(Petition, id=Petition_id)

        petition.delete()

        return Response(status=status.HTTP_204_NO_CONTENT)


class UpdatePetitionStatusView(generics.GenericAPIView):

    serializer_class = serializers.PetitionStatusUpdateSerializer

    # @swagger_auto_schema(operation_summary="Update the status of an Petition")
    def put(self, request, Petition_id):
        petition = get_object_or_404(Petition, pk=Petition_id)

        serializer = self.serializer_class(
            instance=petition, data=request.data)

        if serializer.is_valid():
            serializer.save()

            return Response(status=status.HTTP_200_OK, data=serializer.data)

        return Response(status=status.HTTP_400_BAD_REQUEST, data=serializer.errors)


class UserPetitionsView(generics.GenericAPIView):
    serializer_class = serializers.PetitionSerializer
    permission_classes = [IsAuthenticated]

    # @swagger_auto_schema(operation_summary="Get all Petitions made by a specific user")
    def get(self, request, user_id):
        user = User.objects.get(pk=user_id)

        petitions = Petition.objects.all().filter(organiser_id=user)

        serializer = self.serializer_class(instance=petitions, many=True)

        return Response(data=serializer.data, status=status.HTTP_200_OK)


class UserPetitionDetailView(generics.GenericAPIView):
    serializer_class = serializers.PetitionSerializer
    permission_classes = [IsAuthenticated]

    # @swagger_auto_schema(operation_summary="Get the detail of an Petition made by a specific user")
    def get(self, request, user_id, Petition_id):
        user = User.objects.get(pk=user_id)

        petition = Petition.objects.all().filter(
            organiser_id=user).filter(pk=Petition_id)

        serializer = self.serializer_class(instance=petition)

        return Response(data=serializer.data, status=status.HTTP_200_OK)
