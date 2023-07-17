from django.urls import include, path, re_path
from rest_framework import routers

from . import views

APP_NAME = 'cronogramas'

# Wire up our API using automatic URL routing.
router = routers.DefaultRouter()
router.register(r'cronogramas', views.CronogramaViewSet, basename='Cronograma')
router.register(r'tarefas', views.TarefaViewSet)
router.register(r'alunos', views.AlunoViewSet, basename='Aluno')
router.register(r'auth', views.AuthViewSet,basename='auth')

urlpatterns = [
    path('', include(router.urls)),   
]