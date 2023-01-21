from django.db import models
from django.utils import timezone
from django.contrib.auth.models import User
import datetime

# Create your models here.

class Aluno(models.Model):
    nome = models.CharField(max_length=30, null=True)
    usuario = models.CharField(max_length=30, default="user")
    senha = models.CharField(max_length=30, default="123")
    notificacao = models.BooleanField(default=False)
    user = models.OneToOneField(User, on_delete=models.CASCADE, null=True)
    qtd = models.IntegerField(default=0)

    def __str__(self):
        return self.usuario

class Cronograma(models.Model):
    privacidade = models.BooleanField(default = False)
    titulo = models.CharField(max_length=100)
    aluno = models.ForeignKey(Aluno, on_delete=models.CASCADE, null=True)
    created_by = models.ForeignKey(
        User,
        on_delete=models.CASCADE,
        verbose_name='criado por',
        null=True
    )

    def __str__(self):
        return ("{0} - {1}").format(self.titulo, self.aluno)

class Tarefa(models.Model):
    titulo = models.CharField(max_length=50)
    assunto = models.CharField(max_length=50, null=True)
    descricao = models.CharField(max_length=100)
    hora_inicio = models.TimeField(default=timezone.now)
    data = models.DateTimeField('Data Cronograma')
    status = models.BooleanField(default=False)
    cronograma = models.ForeignKey(Cronograma, on_delete=models.CASCADE)

    def __str__(self):
        return self.descricao

