from django.urls import path
from . import views

urlpatterns = [
    path('', views.PetitionView.as_view(), name='Petitions'),
    path('<int:Petition_id>/', views.PetitionIdView.as_view(), name='Petition'),
    path('update-status/<int:Petition_id>/',
         views.UpdatePetitionStatusView.as_view(), name='update_Petition_status'),
    path('user/<int:user_id>/Petitions',
         views.UserPetitionsView.as_view(), name='users_Petition'),
    path('user/<int:user_id>/Petition/<int:Petition_id>/',
         views.UserPetitionDetailView.as_view(), name='user_Petition_detail'),
]
