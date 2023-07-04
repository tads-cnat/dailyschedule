from django.test import TestCase
from .models import Tarefa, Cronograma, Aluno, Tipo
from django.utils import timezone

from django.urls import reverse
from rest_framework import status
from rest_framework.test import APITestCase

import datetime

class TipoTestCase(TestCase):
  def setUp(self):
    aluno = Aluno.objects.create(first_name="Aluno1", last_name="Aluno1", email="mail@mail.com", username="Aluno1", password="123456")
    cronograma = Cronograma.objects.create(privacidade=False, titulo="Cronograma1", aluno=aluno)
    tarefa = Tarefa.objects.create(titulo="Tarefa1", assunto="Assunto1", descricao="Descricao1", hora_inicio="00:00:00", data=timezone.make_aware(datetime.datetime(2019, 11, 11, 0, 0, 0)), status=False, cronograma=cronograma)
    
    self.tipo1 = Tipo.objects.create(tipo="Tipo1", assunto="false", tarefa=tarefa)
    self.tipo2 = Tipo.objects.create(tipo="Tipo2", assunto="false", tarefa=tarefa)
    self.tipo3 = Tipo.objects.create(tipo="Tipo3", assunto="false", tarefa=tarefa)
  
  def test_same_object(self):
    self.assertEqual(self.tipo1, self.tipo1)
    
  def test_different_object(self):
    self.assertNotEqual(self.tipo1, self.tipo2)
  
  def test_different_types(self):
    self.assertNotEqual(self.tipo1, "Tipo1")

  def test_tipo_ordering(self):
    self.assertLess(self.tipo1, self.tipo2)
    self.assertLessEqual(self.tipo2, self.tipo3)
    self.assertGreater(self.tipo3, self.tipo2)
    self.assertGreaterEqual(self.tipo2, self.tipo1, None)

class TesteDeIntregraçaoDoTipo(TestCase):
  def setUp(self):
    self.dados_do_aluno = {
        'first_name': 'Chris',
        'last_name': 'Brown',
        'email': 'email@email.com',
        'username': 'ChrisBrown',
        'password': 'minhaSenha',
        'notificacao': True,
        'qtd': 1
    }
    self.aluno = Aluno.objects.create(**self.dados_do_aluno)

    self.dados_do_cronograma = {
        'privacidade': False,
        'titulo': 'Cronograma0',
        'aluno': self.aluno
    }
    self.cronograma = Cronograma.objects.create(**self.dados_do_cronograma)

    self.dados_da_tarefa = {
        'titulo': 'Tarefa1',
        'assunto': 'Assunto1',
        'descricao': 'Descricao1',
        'hora_inicio': datetime.time(0, 0),
        'data': timezone.now(),
        'status': False,
        'cronograma': self.cronograma
    }
    self.tarefa = Tarefa.objects.create(**self.dados_da_tarefa)

    self.dados_do_tipo = {
      'tipo': 'Prova',
      'assunto': False,
      'tarefa': self.Tarefa
    }

  def test_create_tipo(self):
    tipo = Tipo.objects.create(**self.dados_do_tipo)
    self.assertEqual(tipo.tipo, self.dados_do_tipo['tipo'])
    self.assertEqual(tipo.assunto, self.dados_do_tipo['assunto'])
    self.assertEqual(tipo.tarefa, self.dados_da_tarefa['tarefa'])

  def test_get_tipo(self):
    tipo = Tipo.objects.create(**self.dados_do_tipo)
    tipo_recebido = Tipo.objects.get(id=tipo.id)
    self.assertEqual(tipo_recebido.tipo, self.dados_do_tipo['tipo'])
    self.assertEqual(tipo_recebido.assunto, self.dados_do_tipo['assunto'])
    self.assertEqual(tipo_recebido.tarefa, self.dados_do_tipo['tarefa'])

  def test_atualizar_tipo(self):
    tarefa = Tarefa.objects.create(**self.dados_da_tarefa)
    tipo = Tipo.objects.create(**self.dados_do_tipo)
    dados_atualizados = {
        'tipo' : 'Aula',
        'assunto' : False,
        'tarefa' : tarefa
    }
    Tipo.objects.filter(id=tipo.id).update(**dados_atualizados)
    tipo_atualizado = Tipo.objects.get(id=tipo.id)
    self.assertEqual(tipo_atualizado.tipo, dados_atualizados['tipo'])
    self.assertEqual(tipo_atualizado.assunto, dados_atualizados['assunto'])
    self.assertEqual(tipo_atualizado.tarefa, dados_atualizados['tarefa'])

  def test_remover_tipo(self):
    tipo = Tipo.objects.create(**self.dados_do_tipo)
    tipo.delete()
    self.assertFalse(Tipo.objects.filter(id=tipo.id).exists())