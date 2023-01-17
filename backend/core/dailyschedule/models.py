from django.db import models
from django.utils import timezone
from django.contrib.auth.models import User
import datetime
from django.contrib.auth.models import User

# Create your models here.

class Aluno(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)

    def __str__(self):
        return ("{0} - primeiro nome".format(self.user.first_name))

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

