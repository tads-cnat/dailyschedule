from django.test import TestCase
from django.contrib.auth import get_user_model
from django.urls import reverse, resolve
from rest_framework import status
import json
from .models import Aluno, Cronograma
from mixer.backend.django import mixer
import pytest

User = get_user_model()

@pytest.mark.django_db
class AlunoCRUDIntegrationTests(TestCase):
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
    @classmethod
    def setUpClass(cls):
        super(AlunoCRUDIntegrationTests, cls).setUpClass()
        mixer.blend('dailyschedule.Aluno')
        cls.factory = RequestFactory()

    def test_create_aluno(self):
        path = reverse('aluno', kwargs={'pk':1})
        request = self.factory.get(path)
        aluno = Aluno.objects.create(**self.aluno_data)
        self.assertEqual(aluno.first_name, self.aluno_data['first_name'])
        self.assertEqual(aluno.last_name, self.aluno_data['last_name'])
        self.assertEqual(aluno.email, self.aluno_data['email'])
        self.assertEqual(aluno.username, self.aluno_data['username'])
        self.assertEqual(aluno.password, self.aluno_data['password'])
        self.assertEqual(aluno.notificacao, self.aluno_data['notificacao'])
        self.assertEqual(aluno.qtd, self.aluno_data['qtd'])

