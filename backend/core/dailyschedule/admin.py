from django.contrib import admin

# Register your models here.
from .models import Aluno, Cronograma, Tarefa

admin.site.register(Aluno)
admin.site.register(Cronograma)
admin.site.register(Tarefa)
