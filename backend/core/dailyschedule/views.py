from django.shortcuts import render, get_object_or_404
from django.http.response import JsonResponse
#from django.contrib.auth import authenticate, login, logout

from django.core.serializers import serialize
from rest_framework.parsers import JSONParser
from rest_framework import status, viewsets

from .utils import *
from .models import Cronograma, Tarefa, Aluno
from .serializers import SerializadorCronograma, SerializadorTarefa, SerializadorAluno
from rest_framework.decorators import api_view, action
from rest_framework.response import Response
from rest_framework.permissions import AllowAny, IsAuthenticated
import datetime

from rest_framework.permissions import IsAuthenticated
from rest_framework.authentication import TokenAuthentication
from rest_framework.views import APIView
from rest_framework.authtoken.models import Token

from .models import Cronograma, Tarefa, Aluno
from .serializers import SerializadorCronograma, SerializadorTarefa, SerializadorAluno, SerializadorLogin, SerializadorCadastro

import datetime

class CronogramaViewSet(viewsets.ModelViewSet):

    #authentication_classes = [TokenAuthentication,]
    #permission_classes = [IsAuthenticated]

    queryset = Cronograma.objects.all()
    serializer_class = SerializadorCronograma
    
    def get_queryset(self):
        queryset = Cronograma.objects.all()
        username = self.request.query_params.get('username')
        id = self.request.query_params.get('id')

        if username:
            queryset = queryset.filter(aluno__username=username)
            #queryset = Cronograma.objects.filter(aluno_usuario=username)
        
        if id:
            queryset = queryset.filter(aluno__id=id)           
        
        return queryset

    @action(detail=False, methods=['get'])
    def editar(self, request):

        idCrono = request.query.params.get('idCrono')

        if idCrono:        
            titulo = request.query_params.get('titulo')
            priv = request.query_params.get('priv')
            cronograma = get_object_or_404(Cronograma, pk=id)
            cronograma.titulo = titulo
            cronograma.privacidade = priv
            cronograma.save()
        return Response({'message': 'Dados atualizados!'}, status=status.HTTP_200_OK)
        
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
    #authentication_classes = [TokenAuthentication,]
    #permission_classes = [IsAuthenticated]

    queryset = Tarefa.objects.all()
    serializer_class = SerializadorTarefa

class AlunoViewSet(viewsets.ModelViewSet):
    #authentication_classes = [TokenAuthentication,]
    #permission_classes = [IsAuthenticated]
    queryset = Aluno.objects.all()
    serializer_class = SerializadorAluno

    @action(detail=True, methods=['get'], url_path='')
    def alerta(self, request, pk):
        msgRetorno = 'Tarefa(s) Pendente(s): '
        now = datetime.datetime.now()
        aft = now + datetime.timedelta(days=1)
        aluno = Aluno.objects.all().first()
        tarefas_t = Tarefa.objects.filter(cronograma__aluno=pk).filter(data__gt=now).filter(data__lt=aft)
        tarefas = Tarefa.objects.filter(cronograma__aluno=pk).filter(data__gt=now).filter(data__lt=aft)
        if tarefas:
            cont = 0
            for tarefa in tarefas:
                msgRetorno = msgRetorno + "\n["+ str(cont)+ "] " + tarefa.titulo
                cont+=1
            email = Email()
            #email.send('Tarefas Pendentes', msgRetorno, ['deividson.silva@escolar.ifrn.edu.br'])
            try:
                email.send('Tarefas Pendentes', msgRetorno, ['deividson.silva@escolar.ifrn.edu.br'])
            except:
                msgRetorno = 'Falha no envio'
        return Response({'message': msgRetorno}, status=status.HTTP_200_OK)

    @action (detail=False, methods=['post'], url_path='')
    def cadastro(self, request):
        #pega os dados do formulario
        username = request.data.get('usuario')
        password = request.data.get('senha')
        confirmed_password = request.data.get('comfirmar_senha')
        email = request.data.get('email')
        first_name = request.data.get('primeiro_nome')
        last_name = request.data.get('ultimo_nome')
        

        #verifica se o usuario ja existe
        user = Aluno.objects.filter(username=username)
        if (user):
            return Response({'error': 'Usuário já cadastrado'}, status=status.HTTP_400_BAD_REQUEST)
        #verifica se as senhas conferem
        else:
            if (password != confirmed_password):

                return Response({'error': 'Senhas não conferem\n','senha':password+"\n",'confirmação':confirmed_password}, status=status.HTTP_400_BAD_REQUEST)
            #cria o usuario
            else:
                user = Aluno.objects.create(username=username, password=password, email=email, first_name=first_name, last_name=last_name)
                user.save()
                #super = User.objects.create_superuser(username=username, password=password, email=email, first_name=first_name, last_name=last_name)
                #super.save()
                return Response({'message': 'Usuário cadastrado com sucesso'}, status=status.HTTP_200_OK)


class AuthViewSet(viewsets.GenericViewSet):
    #permission_classes = []
    serializer_class =[SerializadorLogin, SerializadorCadastro]
    
    @action(detail=False, methods=['post'], url_path='login',serializer_class=SerializadorLogin)
    def login(self, request):
        username = request.data.get('usuario')
        password = request.data.get('senha')

                
        user = Aluno.objects.filter(username=username).first()
        id = user.id
        
        if (user is not None):
            request.session['usuario'] = username
            return Response ({'detail': 'login realizado com sucesso', 'user':id}, status=status.HTTP_200_OK)
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
        user = Aluno.objects.filter(username=username)
        if (user):
            return Response({'error': 'Usuário já cadastrado'}, status=status.HTTP_400_BAD_REQUEST)
        #verifica se as senhas conferem
        else:
            if (password != confirmed_password):

                return Response({'error': 'Senhas não conferem\n','senha':password+"\n",'confirmação':confirmed_password}, status=status.HTTP_400_BAD_REQUEST)
            #cria o usuario
            else:
                user = Aluno(username=username, password=password, email=email, first_name=first_name, last_name=last_name)
                user.save()

                request.session['usuario'] = username
                return Response({'message': 'Usuário cadastrado com sucesso', 'user':username}, status=status.HTTP_200_OK)

    #logout
    @action(detail=False, methods=['get'], url_path='logout')
    def logout(self, request):
        del request.session['usuario']
        return Response({'message': 'Logout realizado com sucesso'}, status=status.HTTP_200_OK)