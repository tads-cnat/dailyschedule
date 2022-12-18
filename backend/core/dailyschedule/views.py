from django.shortcuts import render, get_object_or_404

from django.http.response import JsonResponse
from rest_framework.parsers import JSONParser 
from rest_framework import status, viewsets, filters

from .models import Cronograma, Tarefa, Aluno
from .serializers import SerializadorCronograma, SerializadorTarefa, SerializadorAluno
from rest_framework.decorators import api_view, action
from rest_framework.response import Response

class CronogramaViewSet(viewsets.ModelViewSet):
    queryset = Cronograma.objects.all()
    serializer_class = SerializadorCronograma
    filter_backends = [filters.SearchFilter]
    search_fields = ['titulo']

    @action(detail=True, methods=['get'], url_path='tarefas')
    def get_tarefas(self, request, pk=None):
        cronograma = get_object_or_404(Cronograma, pk=self.get_object().pk)
        tarefas = Tarefa.objects.filter(cronograma=cronograma)
        serializer = SerializadorTarefa(tarefas, many=True)
        return Response(serializer.data)
    
    @action(detail=True, methods=['get'])
    def get_cronogramas_buscados(self, request, titulo=filter_backends):
        cronogramas = Cronograma.objects.filter(titulo=titulo)
        serializer = SerializadorCronograma(cronogramas, many=True)
        return Response(serializer.data)
        

class TarefaViewSet(viewsets.ModelViewSet):
    queryset = Tarefa.objects.all()
    serializer_class = SerializadorTarefa

class AlunoViewSet(viewsets.ModelViewSet):
    queryset = Aluno.objects.all()
    serializer_class = SerializadorAluno
