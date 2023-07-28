from django.test import TestCase
from django.contrib.auth import get_user_model
from django.urls import reverse, resolve
from rest_framework import status
import json
from .models import Aluno, Cronograma

User = get_user_model()

class CronogramaIntegrationTests(TestCase):
    def setUp(self):
        self.aluno_data = {
            'first_name': 'Jefferson',
            'last_name': 'Ribeiro',
            'email': 'r.jeff@mail.com',
            'username': 'testuser',
            'password': 'testpassword',
            'notificacao': False,
            'qtd': 0
        }
        self.aluno = Aluno.objects.create(**self.aluno_data)
        self.cronograma_data = {
            'privacidade': False,
            'titulo': 'Cronograma Teste',
            'aluno': self.aluno
        }

    def test_criar_cronograma(self):
        cronograma = Cronograma.objects.create(**self.cronograma_data)
        self.assertEqual(cronograma.privacidade, self.cronograma_data['privacidade'])
        self.assertEqual(cronograma.titulo, self.cronograma_data['titulo'])
        self.assertEqual(cronograma.aluno, self.aluno)

    def test_atualizar_cronograma(self):
        cronograma = Cronograma.objects.create(**self.cronograma_data)
        updated_data = {
            'titulo': 'Titulo teste',
            'privacidade': True
        }
        Cronograma.objects.filter(id=cronograma.id).update(**updated_data)
        updated_cronograma = Cronograma.objects.get(id=cronograma.id)
        self.assertEqual(updated_cronograma.privacidade, updated_data['privacidade'])
        self.assertEqual(updated_cronograma.titulo, updated_data['titulo'])

    def test_deletar_cronograma(self):
        cronograma = Cronograma.objects.create(**self.cronograma_data)
        Cronograma.objects.filter(id=cronograma.id).delete()
        self.assertFalse(Cronograma.objects.filter(id=cronograma.id).exists())
    
    def test_obter_cronograma_por_titulo(self):
        cronograma = Cronograma.objects.create(**self.cronograma_data)
        cronograma_obtido = Cronograma.objects.get(titulo=cronograma.titulo)
        self.assertEqual(cronograma_obtido.titulo, cronograma.titulo)
    
    def test_obter_cronogramas_por_aluno(self):
        cronograma1 = Cronograma.objects.create(**self.cronograma_data)
        cronograma2 = Cronograma.objects.create(
            privacidade=False,
            titulo="Cronograma 2",
            aluno=self.aluno
        )
        cronogramas_aluno = Cronograma.objects.filter(aluno=self.aluno)

        for cronograma in cronogramas_aluno:
            self.assertEqual(cronograma.privacidade, cronograma1.privacidade)
            self.assertEqual(cronograma.aluno, cronograma1.aluno)

        titulos_cronogramas = set(c.titulo for c in cronogramas_aluno)
        self.assertIn(cronograma1.titulo, titulos_cronogramas)
        self.assertEqual(sum(1 for c in cronogramas_aluno if c.titulo == cronograma2.titulo), 1)