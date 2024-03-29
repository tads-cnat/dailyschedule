"""core URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include, re_path
from rest_framework import routers
from drf_yasg import openapi
from drf_yasg.views import get_schema_view as swagger_get_schema_view
from dailyschedule.permissoes import AllowAny
schema_view = swagger_get_schema_view(
    openapi.Info(
        title="Dailychedule API",
        default_version='1.0.0',
        description="API para gerenciamento de cronogramas",
    ),
    public=True,    
    permission_classes=(AllowAny,),
)


urlpatterns = [
    path('accounts/', include('django.contrib.auth.urls')),

    path('admin/', admin.site.urls),
    path('api/', include('dailyschedule.urls')),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework')),
    
    #swagger routes
    path('swagger/', schema_view.with_ui('swagger', cache_timeout=0), name='schema-swagger-ui'),
    path('redoc/', schema_view.with_ui('redoc', cache_timeout=0), name='schema-redoc'),
    ]
