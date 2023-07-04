from django.test import TestCase
from .models import Tarefa, Cronograma, Aluno
from django.utils import timezone

from django.urls import reverse
from rest_framework import status
from rest_framework.test import APITestCase

import datetime


class TarefaTestCase(TestCase):
    def setUp(self):
        aluno = Aluno.objects.create(first_name="Aluno1", last_name="Aluno1", email="mail@mail.com", username="Aluno1", password="123456")
        cronograma = Cronograma.objects.create(privacidade=False, titulo="Cronograma1", aluno=aluno)
        self.tarefa1 = Tarefa.objects.create(
            titulo="Tarefa1",
            assunto="Assunto1",
            descricao="Descricao1",
            hora_inicio="00:00:00",
            data=timezone.make_aware(datetime.datetime(2019, 11, 11, 0, 0, 0)),
            status=False,
            cronograma=cronograma
        )
        self.tarefa2 = Tarefa.objects.create(
            titulo="Tarefa2",
            assunto="Assunto2",
            descricao="Descricao2",
            hora_inicio="00:00:00",
            data=timezone.make_aware(datetime.datetime(2019, 11, 11, 0, 0, 0)),
            status=False,
            cronograma=cronograma
        )
        self.tarefa3 = Tarefa.objects.create(
            titulo="Tarefa3",
            assunto="Assunto3",
            descricao="Descricao3",
            hora_inicio="00:00:00",
            data=timezone.make_aware(datetime.datetime(2019, 11, 11, 0, 0, 0)),
            status=False,
            cronograma=cronograma
        )



    def test_eq_same_object(self):
        self.assertEqual(self.tarefa1, self.tarefa1)

    def test_eq_different_object(self):
        self.assertNotEqual(self.tarefa1, self.tarefa2)
    
    def test_eq_different_type(self):
        self.assertNotEqual(self.tarefa1, "Tarefa1")



class TarefaCRUDIntegrationTests(TestCase):
    def setUp(self):
        self.aluno_data = {
            'first_name': 'Jane',
            'last_name': 'Smith',
            'email': 'jane@example.com',
            'username': 'janesmith',
            'password': 'newpassword',
            'notificacao': True,
            'qtd': 1
        }
        self.aluno = Aluno.objects.create(**self.aluno_data)
        self.cronograma_data = {
            'privacidade': False,
            'titulo': 'Cronograma1',
            'aluno': self.aluno
        }
        self.cronograma = Cronograma.objects.create(**self.cronograma_data)
        self.tarefa_data = {
            'titulo': 'Tarefa1',
            'assunto': 'Assunto1',
            'descricao': 'Descricao1',
            'hora_inicio': datetime.time(0, 0),
            'data': timezone.now(),
            'status': False,
            'cronograma': self.cronograma
            
        }


    def test_create_tarefa(self):
        tarefa = Tarefa.objects.create(**self.tarefa_data)
        self.assertEqual(tarefa.titulo, self.tarefa_data['titulo'])
        self.assertEqual(tarefa.assunto, self.tarefa_data['assunto'])
        self.assertEqual(tarefa.descricao, self.tarefa_data['descricao'])
        self.assertEqual(tarefa.hora_inicio, self.tarefa_data['hora_inicio'])
        self.assertEqual(tarefa.data, self.tarefa_data['data'])
        self.assertEqual(tarefa.status, self.tarefa_data['status'])
        self.assertEqual(tarefa.cronograma, self.tarefa_data['cronograma'])

    def test_retrieve_tarefa(self):
        tarefa = Tarefa.objects.create(**self.tarefa_data)
        retrieved_tarefa = Tarefa.objects.get(id=tarefa.id)
        self.assertEqual(retrieved_tarefa.titulo, self.tarefa_data['titulo'])
        self.assertEqual(retrieved_tarefa.assunto, self.tarefa_data['assunto'])
        self.assertEqual(retrieved_tarefa.descricao, self.tarefa_data['descricao'])
        hora_inicio = self.tarefa_data['hora_inicio']
        data = self.tarefa_data['data'].replace(tzinfo=retrieved_tarefa.data.tzinfo)
        self.assertEqual(retrieved_tarefa.hora_inicio, hora_inicio)
        self.assertEqual(retrieved_tarefa.data, data)
        self.assertEqual(retrieved_tarefa.status, self.tarefa_data['status'])
        self.assertEqual(retrieved_tarefa.cronograma, self.tarefa_data['cronograma'])



    def test_update_tarefa(self):
        cronograma = Cronograma.objects.create(**self.cronograma_data)
        tarefa = Tarefa.objects.create(**self.tarefa_data)
        updated_data = {
            'titulo': 'Tarefa2',
            'assunto': 'Assunto2',
            'descricao': 'Descricao2',
            'hora_inicio': datetime.time(12, 0),
            'data': timezone.now(),
            'status': False,
            'cronograma': cronograma

        }
        Tarefa.objects.filter(id=tarefa.id).update(**updated_data)
        updated_tarefa = Tarefa.objects.get(id=tarefa.id)
        self.assertEqual(updated_tarefa.titulo, updated_data['titulo'])
        self.assertEqual(updated_tarefa.assunto, updated_data['assunto'])
        self.assertEqual(updated_tarefa.descricao, updated_data['descricao'])
        self.assertEqual(updated_tarefa.hora_inicio, updated_data['hora_inicio'])
        self.assertEqual(updated_tarefa.data, updated_data['data'])
        self.assertEqual(updated_tarefa.status, updated_data['status'])
        self.assertEqual(updated_tarefa.cronograma, updated_data['cronograma'])


    def test_delete_tarefa(self):
        tarefa = Tarefa.objects.create(**self.tarefa_data)
        tarefa.delete()   
        self.assertFalse(Tarefa.objects.filter(id=tarefa.id).exists())



class TarefaSystemTest(APITestCase):
    def setUp(self):
        self.aluno_data = {
            'first_name': 'Jane',
            'last_name': 'Smith',
            'email': 'jane@example.com',
            'username': 'janesmith',
            'password': 'newpassword',
            'notificacao': True,
            'qtd': 1
        }
        self.aluno = Aluno.objects.create(**self.aluno_data)
        self.cronograma_data = {
            'privacidade': False,
            'titulo': 'Cronograma1',
            'aluno': self.aluno
        }
        self.cronograma = Cronograma.objects.create(**self.cronograma_data)
        self.tarefa_data = {
            'titulo': 'Tarefa1',
            'assunto': 'Assunto1',
            'descricao': 'Descricao1',
            'hora_inicio': datetime.time(0, 0),
            'data': timezone.now(),
            'status': False,
            'cronograma': self.cronograma.id
            
        }

    def test_create_tarefa(self):
        response = self.client.post('/api/tarefas/', self.tarefa_data,)
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(Tarefa.objects.count(), 1)
    
    def test_retrieve_tarefa(self):
        tarefa = self.client.post('/api/tarefas/', self.tarefa_data,)
        response = self.client.get('/api/tarefas/{}/'.format(tarefa.data['id']))
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data['titulo'], self.tarefa_data['titulo'])
        self.assertEqual(response.data['assunto'], self.tarefa_data['assunto'])
        self.assertEqual(response.data['descricao'], self.tarefa_data['descricao'])
        self.assertEqual(response.data['status'], self.tarefa_data['status'])
        self.assertEqual(response.data['cronograma'], self.tarefa_data['cronograma'])

    def test_update_tarefa(self):
        tarefa = self.client.post('/api/tarefas/', self.tarefa_data,)
        updated_data = {
            'titulo': 'Tarefa2',
            'assunto': 'Assunto2',
            'descricao': 'Descricao2',
            'hora_inicio': datetime.time(12, 0),
            'data': timezone.now(),
            'status': False,
            'cronograma': self.cronograma.id

        }
        response = self.client.put('/api/tarefas/{}/'.format(tarefa.data['id']), updated_data)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data['titulo'], updated_data['titulo'])
        self.assertEqual(response.data['assunto'], updated_data['assunto'])
        self.assertEqual(response.data['descricao'], updated_data['descricao'])
        self.assertEqual(response.data['status'], updated_data['status'])
        self.assertEqual(response.data['cronograma'], updated_data['cronograma'])

    def test_delete_tarefa(self):
        tarefa = self.client.post('/api/tarefas/', self.tarefa_data,)
        response = self.client.delete('/api/tarefas/{}/'.format(tarefa.data['id']))
        self.assertEqual(response.status_code, status.HTTP_204_NO_CONTENT)
        self.assertFalse(Tarefa.objects.filter(id=tarefa.data['id']).exists())

    