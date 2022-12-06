from django.shortcuts import render

from django.http.response import JsonResponse
from rest_framework.parsers import JSONParser 
from rest_framework import status, viewsets

from .models import Cronograma, Tarefa, Aluno
from .serializers import SerializadorCronograma, SerializadorTarefa, SerializadorAluno
from rest_framework.decorators import api_view, action
from rest_framework.response import Response

class CronogramaViewSet(viewsets.ModelViewSet):
    queryset = Cronograma.objects.all()
    serializer_class = SerializadorCronograma

    @action(detail=False, methods=['get'], url_path='cronogramas/?tarefa=(?P<tarefa_id>[0-9]+)')
    def get_cronogramas(self, request, tarefa_id):
        cronogramas = Cronograma.objects.filter(tarefa_id=tarefa_id)
        serializer = SerializadorCronograma(cronogramas, many=True)
        return Response(serializer.data)

class TarefaViewSet(viewsets.ModelViewSet):
    queryset = Tarefa.objects.all()
    serializer_class = SerializadorTarefa

class AlunoViewSet(viewsets.ModelViewSet):
    queryset = Aluno.objects.all()
    serializer_class = SerializadorAluno