from django.db import models
from django.utils import timezone
from django.contrib.auth.models import AbstractUser
from functools import total_ordering
import datetime

# Create your models here.
def data_atual():
        return timezone.now()

@total_ordering
class Aluno(AbstractUser):
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)    
    last_login = models.DateTimeField(default=data_atual)
    email = models.EmailField(max_length=254)
    username = models.CharField(max_length=50, unique=True)
    password = models.CharField(max_length=50)
    notificacao = models.BooleanField(default=False)
    qtd = models.IntegerField(default=0)

    REQUIRED_FIELDS = ['first_name', 'last_name', 'email', 'password']
    USERNAME_FIELD = 'username'    
    def __str__(self):
        return "{0} - primeiro nome".format(self.first_name)

    def __eq__(self, other):
        if isinstance(other, Aluno):
            return (
                self.first_name == other.first_name and
                self.last_name == other.last_name
            )
        return False
    
    def __lt__(self, other):
        if isinstance(other, Aluno):
            if self.first_name != other.first_name:
                return self.first_name < other.first_name
            return self.last_name < other.last_name
        raise TypeError("Cannot compare 'Aluno' with type {}".format(type(other)))

class Cronograma(models.Model):
    privacidade = models.BooleanField(default = False)
    titulo = models.CharField(max_length=100)
    aluno = models.ForeignKey(Aluno, on_delete=models.CASCADE, null=True)

    def __str__(self):
        return ("{0} - {1}").format(self.titulo, self.aluno)

class Tarefa(models.Model):
    titulo = models.CharField(max_length=50)
    assunto = models.CharField(max_length=50, null=True)
    descricao = models.CharField(max_length=100)
    hora_inicio = models.TimeField(default=datetime.time(0, 0))
    data = models.DateTimeField('Data Cronograma')
    status = models.BooleanField(default=False)
    cronograma = models.ForeignKey(Cronograma, on_delete=models.CASCADE)

    def __str__(self):
        return self.descricao

class Tipo(models.Model):
    tipo = models.CharField(max_length=10)
    assunto = models.BooleanField(default=False)
    tarefa = models.OneToOneField(Tarefa, on_delete=models.CASCADE)

