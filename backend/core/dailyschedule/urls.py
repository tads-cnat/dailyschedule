from django.urls import include, re_path, path
from .views import *
from rest_framework import routers
from . import views,admin



app_name = 'cronogramas'

# Wire up our API using automatic URL routing.
router = routers.DefaultRouter()
router.register(r'cronogramas', views.CronogramaViewSet)
router.register(r'tarefas', views.TarefaViewSet)
router.register(r'alunos', views.AlunoViewSet)
router.register(r'auth', views.AuthViewSet,basename='auth')
router.register(r'cadastro',views.AlunoViewSet,basename='cadastro')


urlpatterns = [
    path('', include(router.urls)),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework')),
    
]