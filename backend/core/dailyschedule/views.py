from django.shortcuts import render, get_object_or_404

from django.http.response import JsonResponse
from rest_framework.parsers import JSONParser 
from rest_framework import status, viewsets

from .models import Cronograma, Tarefa, Aluno
from .serializers import SerializadorCronograma, SerializadorTarefa, SerializadorAluno
from rest_framework.decorators import api_view, action
from rest_framework.response import Response
import datetime

class CronogramaViewSet(viewsets.ModelViewSet):
    queryset = Cronograma.objects.all()
    serializer_class = SerializadorCronograma

    @action(detail=True, methods=['get'], url_path='tarefas')
    def get_tarefas(self, request, pk=None):
        cronograma = get_object_or_404(Cronograma, pk=self.get_object().pk)
        tarefas = Tarefa.objects.filter(cronograma=cronograma)
        serializer = SerializadorTarefa(tarefas, many=True)
        return Response(serializer.data)

    @action(detail=True, methods=['get'], url_path='')
    def tarefas_semana(self,request,pk=None):
        inicio = self.getInicio()
        fim = inicio + datetime.timedelta(days=7)
        cronograma = get_object_or_404(Cronograma, pk=self.get_object().pk)
        tarefas = Tarefa.objects.filter(cronograma=cronograma, data__gte=inicio, data__lte=fim)
        serializer = SerializadorTarefa(tarefas, many=True)
        return Response(serializer.data)
    
    @action(detail=True, methods=['get'], url_path='')
    def semana1(self,request,pk=None):
        inicio = self.getInicio()
        semana1 = inicio + datetime.timedelta(days=7)
        fim = semana1 + datetime.timedelta(days=7)
        cronograma = get_object_or_404(Cronograma, pk=self.get_object().pk)
        tarefas = Tarefa.objects.filter(cronograma=cronograma, data__gte=semana1, data__lte=fim)
        serializer = SerializadorTarefa(tarefas, many=True)
        return Response(serializer.data)
    
    @action(detail=True, methods=['get'], url_path='')
    def semana2(self,request,pk=None):
        inicio = self.getInicio()
        semana1 = inicio + datetime.timedelta(days=14)
        fim = semana1 + datetime.timedelta(days=7)
        cronograma = get_object_or_404(Cronograma, pk=self.get_object().pk)
        tarefas = Tarefa.objects.filter(cronograma=cronograma, data__gte=semana1, data__lte=fim)
        serializer = SerializadorTarefa(tarefas, many=True)
        return Response(serializer.data)
    
    @action(detail=True, methods=['get'], url_path='')
    def semana3(self,request,pk=None):
        inicio = self.getInicio()
        semana1 = inicio + datetime.timedelta(days=21)
        fim = semana1 + datetime.timedelta(days=7)
        cronograma = get_object_or_404(Cronograma, pk=self.get_object().pk)
        tarefas = Tarefa.objects.filter(cronograma=cronograma, data__gte=semana1, data__lte=fim)
        serializer = SerializadorTarefa(tarefas, many=True)
        return Response(serializer.data)
    
    @action(detail=True, methods=['get'], url_path='')
    def semana4(self,request,pk=None):
        inicio = self.getInicio()
        semana1 = inicio + datetime.timedelta(days=28)
        fim = semana1 + datetime.timedelta(days=7)
        cronograma = get_object_or_404(Cronograma, pk=self.get_object().pk)
        tarefas = Tarefa.objects.filter(cronograma=cronograma, data__gte=semana1, data__lte=fim)
        serializer = SerializadorTarefa(tarefas, many=True)
        return Response(serializer.data)
    
    def getInicio(self):
        now = datetime.date.today()
        inicio = now
        if now.weekday == 1:
            inicio = now - datetime.timedelta(days=1)
        elif now.weekday == 2:
            inicio = now - datetime.timedelta(days=2)
        elif now.weekday == 3:
            inicio = now - datetime.timedelta(days=3)
        elif now.weekday == 4:
            inicio = now - datetime.timedelta(days=4)
        elif now.weekday == 5:
            inicio = now - datetime.timedelta(days=5)
        elif now.weekday == 6:
            inicio = now - datetime.timedelta(days=6)
        return inicio

class TarefaViewSet(viewsets.ModelViewSet):
    queryset = Tarefa.objects.all()
    serializer_class = SerializadorTarefa

class AlunoViewSet(viewsets.ModelViewSet):
    queryset = Aluno.objects.all()
    serializer_class = SerializadorAluno