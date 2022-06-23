from django.urls import path
from . import views

urlpatterns = [
    path('', views.CampaignView.as_view(), name='campaigns'),
    path('<int:campaign_id>/', views.CampaignIdView.as_view(), name='campaign'),
    path('analysis/<int:campaign_id>/',
         views.CampaignAnalysis.as_view(), name='campaign analysis'),

    #     path('filter/<str:type>/', views.FilterView.as_view(), name='filter campaign'),
    #     path('like/<int:campaign_id>/',
    #          views.UpdateCampaignLikesView.as_view(), name='update_likes'),

    path('update-status/<int:campaign_id>/',
         views.UpdateCampaignStatusView.as_view(), name='update_campaign_status'),
    path('user/<int:user_id>/campaigns',
         views.UserCampaignsView.as_view(), name='users_campaign'),
    path('user/<int:user_id>/campaign/<int:campaign_id>/',
         views.UserCampaignDetailView.as_view(), name='user_campaign_detail'),
]
