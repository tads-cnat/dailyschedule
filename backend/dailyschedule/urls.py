from django.urls import include, re_path

from . import views

app_name = 'cronogramas'

urlPatterns = [
    re_path(r'^api/alunos$', views.aluno_list),
    re_path(r'^api/alunos/(?P<pk>[0-9]+)$', views.aluno_detail),
]