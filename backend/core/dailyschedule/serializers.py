from django.contrib.auth.models import User, Group
from rest_framework import serializers
from .models import Aluno, Cronograma, Tarefa, User

class SerializadorAluno(serializers.ModelSerializer):
    class Meta:
        model = Aluno
        fields = ('id', 'user')

class SerializadorCronograma(serializers.ModelSerializer):
    class Meta:
        model = Cronograma
        fields = ('id', 'privacidade', 'titulo', 'aluno')

class SerializadorTarefa(serializers.ModelSerializer): 
    class Meta:
        model = Tarefa
        fields = ('id', 'titulo', 'assunto', 'descricao', 'hora_inicio', 'data', 'status', 'cronograma')

class SerializadorLogin(serializers.Serializer):
    usuario = serializers.CharField(max_length=100)
    senha = serializers.CharField(max_length=100)