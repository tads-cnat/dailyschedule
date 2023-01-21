from django.shortcuts import render, get_object_or_404
from django.http.response import JsonResponse
from django.contrib.auth import authenticate

from rest_framework.parsers import JSONParser 
from rest_framework import status, viewsets
from rest_framework.decorators import api_view, action
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework.authentication import TokenAuthentication
from rest_framework.views import APIView
from rest_framework.authtoken.models import Token

from .models import Cronograma, Tarefa, Aluno, User
from .serializers import SerializadorCronograma, SerializadorTarefa, SerializadorAluno, SerializadorLogin, SerializadorCadastro

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
        fim = inicio + datetime.timedelta(days=6)
        cronograma = get_object_or_404(Cronograma, pk=self.get_object().pk)
        tarefas = Tarefa.objects.filter(cronograma=cronograma, data__gte=inicio, data__lte=fim).order_by('data')
        serializer = SerializadorTarefa(tarefas, many=True)
        return Response(serializer.data)
    
    @action(detail=True, methods=['get'], url_path='')
    def semana1(self,request,pk=None):
        inicio = self.getInicio()
        print("inicio {}".format(inicio))
        semana1 = inicio + datetime.timedelta(days=7)
        fim = semana1 + datetime.timedelta(days=7)
        cronograma = get_object_or_404(Cronograma, pk=self.get_object().pk)
        tarefas = Tarefa.objects.filter(cronograma=cronograma, data__gte=semana1, data__lte=fim).order_by('data')
        serializer = SerializadorTarefa(tarefas, many=True)
        return Response(serializer.data)
    
    @action(detail=True, methods=['get'], url_path='')
    def semana2(self,request,pk=None):
        inicio = self.getInicio()
        semana1 = inicio + datetime.timedelta(days=14)
        fim = semana1 + datetime.timedelta(days=7)
        cronograma = get_object_or_404(Cronograma, pk=self.get_object().pk)
        tarefas = Tarefa.objects.filter(cronograma=cronograma, data__gte=semana1, data__lte=fim).order_by('data')
        serializer = SerializadorTarefa(tarefas, many=True)
        return Response(serializer.data)
    
    @action(detail=True, methods=['get'], url_path='')
    def semana3(self,request,pk=None):
        inicio = self.getInicio()
        semana1 = inicio + datetime.timedelta(days=21)
        fim = semana1 + datetime.timedelta(days=7)
        cronograma = get_object_or_404(Cronograma, pk=self.get_object().pk)
        tarefas = Tarefa.objects.filter(cronograma=cronograma, data__gte=semana1, data__lte=fim).order_by('data')
        serializer = SerializadorTarefa(tarefas, many=True)
        return Response(serializer.data)
    
    @action(detail=True, methods=['get'], url_path='')
    def semana4(self,request,pk=None):
        inicio = self.getInicio()
        semana1 = inicio + datetime.timedelta(days=28)
        fim = semana1 + datetime.timedelta(days=7)
        cronograma = get_object_or_404(Cronograma, pk=self.get_object().pk)
        tarefas = Tarefa.objects.filter(cronograma=cronograma, data__gte=semana1, data__lte=fim).order_by('data')
        serializer = SerializadorTarefa(tarefas, many=True)
        return Response(serializer.data)
    
    def getInicio(self):
        now = datetime.date.today()
        inicio = now
        if now.weekday() == 1:
            inicio = now - datetime.timedelta(days=1)
        elif now.weekday() == 2:
            inicio = now - datetime.timedelta(days=2)
        elif now.weekday() == 3:
            inicio = now - datetime.timedelta(days=3)
        elif now.weekday() == 4:
            inicio = now - datetime.timedelta(days=4)
        elif now.weekday() == 5:
            inicio = now - datetime.timedelta(days=5)
        elif now.weekday() == 6:
            inicio = now - datetime.timedelta(days=6)
        return inicio

class TarefaViewSet(viewsets.ModelViewSet):

    queryset = Tarefa.objects.all()
    serializer_class = SerializadorTarefa

class AlunoViewSet(viewsets.ModelViewSet):
    queryset = Aluno.objects.all()

    serializer_class = SerializadorAluno

class AuthViewSet(viewsets.GenericViewSet):
    permission_classes = []
    
    @action(detail=False, methods=['post'], url_path='login',serializer_class=SerializadorLogin)
    def login(self, request):
        username = request.data.get('usuario')
        password = request.data.get('senha')

        user = User.objects.filter(username=username)

        if (user):
            user = authenticate(username=username, password=password)

            token, created = Token.objects.get_or_create(user=user)
            return Response({'token:': token.key}, status=status.HTTP_200_OK)
        else:
            return Response({'error': 'Usuário não encontrado'}, status=status.HTTP_400_BAD_REQUEST)
    
    #cadastro de usuario
    @action (detail=False, methods=['post'], url_path='cadastro', serializer_class=SerializadorCadastro)
    def cadastro(self, request):
        #pega os dados do formulario
        username = request.data.get('usuario')
        password = request.data.get('senha')
        confirmed_password = request.data.get('comfirmar_senha')
        email = request.data.get('email')
        first_name = request.data.get('primeiro_nome')
        last_name = request.data.get('ultimo_nome')

        #verifica se o usuario ja existe
        user = User.objects.filter(username=username)
        if (user):
            return Response({'error': 'Usuário já cadastrado'}, status=status.HTTP_400_BAD_REQUEST)
        #verifica se as senhas conferem
        else:
            if (password != confirmed_password):

                return Response({'error': 'Senhas não conferem\n','senha':password+"\n",'confirmação':confirmed_password}, status=status.HTTP_400_BAD_REQUEST)
            #cria o usuario
            else:
                user = User.objects.create_user(username=username, password=password, email=email, first_name=first_name, last_name=last_name)
                user.save()
                aluno = Aluno.objects.create(user=user)
                aluno.save()
                return Response({'message': 'Usuário cadastrado com sucesso'}, status=status.HTTP_200_OK)

    #logout
    @action(detail=False, methods=['get'], url_path='logout',permission_classes=[IsAuthenticated], authentication_classes=[TokenAuthentication,])
    def logout(self, request):
        request.user.auth_token.delete()
        return Response(status=status.HTTP_200_OK)