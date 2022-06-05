from django.contrib import admin
from django.urls import include, path
from rest_framework_simplejwt import views as jwt_views
from django.contrib import admin
from django.urls import include, path
from drf_yasg import openapi
from drf_yasg.views import get_schema_view
from rest_framework import permissions

schema_view = get_schema_view(
    openapi.Info(
        title="Crowdfunding platform",
        default_version="v1",
        description="This is a REST API for the Crowdfunding platform",
    ),
    public=True,
    permission_classes=(permissions.AllowAny,),
)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/token/', jwt_views.TokenObtainPairView.as_view(),
         name='token_obtain_pair'),
    path('api/token/refresh/', jwt_views.TokenRefreshView.as_view(),
         name='token_refresh'),
    path('account/', include('account.urls')),
    path('campaigns/', include('campaigns.urls')),
    path('petition/', include('petition.urls')),
    path("scrapper/", include("scrapper.urls")),
    path("", schema_view.with_ui("swagger", cache_timeout=0)),
]
