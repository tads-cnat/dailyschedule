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

#serializer para cadastro de usuario
class SerializadorCadastro(serializers.Serializer):
    primeiro_nome = serializers.CharField(max_length=20)
    ultimo_nome = serializers.CharField(max_length=60)
    usuario = serializers.CharField(max_length=30)
    email = serializers.EmailField(max_length=40)
    senha = serializers.CharField(max_length=40,)
    comfirmar_senha = serializers.CharField(max_length=40)
    class meta:

        model = User
        fields = ('usuario', 'senha', 'email', 'primeiro_nome', 'ultimo_nome')
    
    """def save(self):
        usuario = User(
            usuario=self.validated_data['usuario'], 
            email=self.validated_data['email'],
            primeiro_nome=self.validated_data['primeiro_nome'],
            ultimo_nome=self.validated_data['ultimo_nome'],
            senha=self.validated_data['senha']
        )
        senha = self.validated_data['senha']
        comfirma_senha = self.validated_data['comfirma_senha']

        if senha != comfirma_senha:
            raise serializers.ValidationError({'senha': 'Senhas não conferem'})
        else:
            usuario.set_password(self.validated_data['senha'])
            usuario.save()
            aluno = Aluno.objects.create(user=usuario)
            aluno.save()
            return aluno"""