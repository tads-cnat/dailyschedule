from django.test import TestCase
from django.contrib.auth import get_user_model
from django.urls import reverse, resolve
from rest_framework import status
import json
from .models import Aluno, Cronograma

User = get_user_model()

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

    def test_create_aluno(self):
        aluno = Aluno.objects.create(**self.aluno_data)
        self.assertEqual(aluno.first_name, self.aluno_data['first_name'])
        self.assertEqual(aluno.last_name, self.aluno_data['last_name'])
        self.assertEqual(aluno.email, self.aluno_data['email'])
        self.assertEqual(aluno.username, self.aluno_data['username'])
        self.assertEqual(aluno.password, self.aluno_data['password'])
        self.assertEqual(aluno.notificacao, self.aluno_data['notificacao'])
        self.assertEqual(aluno.qtd, self.aluno_data['qtd'])

    def test_retrieve_aluno(self):
        aluno = Aluno.objects.create(**self.aluno_data)
        retrieved_aluno = Aluno.objects.get(id=aluno.id)
        self.assertEqual(retrieved_aluno.first_name, self.aluno_data['first_name'])
        self.assertEqual(retrieved_aluno.last_name, self.aluno_data['last_name'])
        self.assertEqual(retrieved_aluno.email, self.aluno_data['email'])
        self.assertEqual(retrieved_aluno.username, self.aluno_data['username'])
        self.assertEqual(retrieved_aluno.password, self.aluno_data['password'])
        self.assertEqual(retrieved_aluno.notificacao, self.aluno_data['notificacao'])
        self.assertEqual(retrieved_aluno.qtd, self.aluno_data['qtd'])

    def test_update_aluno(self):
        aluno = Aluno.objects.create(**self.aluno_data)
        updated_data = {
            'first_name': 'Jane',
            'last_name': 'Smith',
            'email': 'jane@example.com',
            'username': 'janesmith',
            'password': 'newpassword',
            'notificacao': True,
            'qtd': 1
        }
        Aluno.objects.filter(id=aluno.id).update(**updated_data)
        updated_aluno = Aluno.objects.get(id=aluno.id)
        self.assertEqual(updated_aluno.first_name, updated_data['first_name'])
        self.assertEqual(updated_aluno.last_name, updated_data['last_name'])
        self.assertEqual(updated_aluno.email, updated_data['email'])
        self.assertEqual(updated_aluno.username, updated_data['username'])
        self.assertEqual(updated_aluno.password, updated_data['password'])
        self.assertEqual(updated_aluno.notificacao, updated_data['notificacao'])
        self.assertEqual(updated_aluno.qtd, updated_data['qtd'])

    def test_delete_aluno(self):
        aluno = Aluno.objects.create(**self.aluno_data)
        Aluno.objects.filter(id=aluno.id).delete()
        self.assertFalse(Aluno.objects.filter(id=aluno.id).exists())

class AlunoCRUDSystemTests(TestCase):
    def setUp(self):
        self.username = 'testuser'
        self.password = 'testpassword'
        self.aluno_data = {
            'first_name': 'Jefferson',
            'last_name': 'Ribeiro',
            'email': 'r.jeff@mail.com',
            'username': self.username,
            'password': self.password,
        }

    def test_create_aluno(self):
        url = reverse('Aluno-list')
        response = self.client.post(url, data=self.aluno_data)

        # Print para debug
        print(response.content)
        # Print para debug
        print(response.data)


        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertTrue(User.objects.filter(username=self.username).exists())

    def test_retrieve_aluno(self):
        user = User.objects.create_user(**self.aluno_data)
        url = reverse('Aluno-detail', kwargs={'pk': user.id})
        response = self.client.get(url)

        # Print para debug
        print(response.content)
        # Print para debug
        print(response.data)


        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def test_update_aluno(self):
        user = User.objects.create_user(username='example_user', password='example_password', email='existing_email@example.com')
        updated_data = {
            'first_name': 'Jane',
            'last_name': 'Smith',
            'email': 'jane.smith@example.com',
            'username': 'example_user',
            'password': 'example_password',
        }
        url = reverse('Aluno-detail', kwargs={'pk': user.id})
        response = self.client.put(url, data=json.dumps(updated_data), content_type='application/json')
        
        # Print para debug
        print(response.content)
        # Print para debug
        print(response.data)
        
        self.assertEqual(response.status_code, status.HTTP_200_OK, response.content)


    def test_delete_aluno(self):
        user = User.objects.create_user(**self.aluno_data)
        url = reverse('Aluno-detail', kwargs={'pk': user.id})
        response = self.client.delete(url)

        # Print para debug
        print(response.content)
        # Print para debug
        print(response.data)


        self.assertEqual(response.status_code, status.HTTP_204_NO_CONTENT)
        self.assertFalse(User.objects.filter(username=self.username).exists())

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

class CronogramaCRUDSystemTests(TestCase):
    def setUp(self):
        self.aluno_data = {
            'first_name': 'Lucas',
            'last_name': 'Melo',
            'email': 'lucas@mail.com',
            'username': 'testuser',
            'notificacao': False,
            'qtd': 0
        }
        self.aluno = Aluno.objects.create(**self.aluno_data)
        self.cronograma = {
            'privacidade': False,
            'titulo': 'Cronograma de Teste',
            'aluno': self.aluno # Use o ID do aluno aqui
        }

    def test_create_cronograma(self):
        response = self.client.post('/api/cronogramas/', data={
            'privacidade': False,
            'titulo': 'Cronograma de Teste',
            'aluno': self.aluno.id
        }, format='json')

        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertTrue(Cronograma.objects.filter(titulo='Cronograma de Teste').exists())

    def test_retrieve_cronograma(self):
        cronograma1 = Cronograma.objects.create(**self.cronograma)
        response = self.client.get('/api/cronogramas/' + str(cronograma1.id) + '/')

        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def test_update_cronograma(self):
        cronograma1 = Cronograma.objects.create(**self.cronograma)
        updated_data = {
            'privacidade': True,
            'titulo': 'Cronograma atualizado',
        }
        response = self.client.put('/api/cronogramas/' + str(cronograma1.id) + '/', data=json.dumps(updated_data), content_type='application/json')
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def test_delete_cronograma(self):
        cronograma1 = Cronograma.objects.create(**self.cronograma)
        response = self.client.delete('/api/cronogramas/' + str(cronograma1.id) + '/')

        self.assertFalse(Cronograma.objects.filter(pk=cronograma1.id).exists())

    def test_search_cronograma_title(self):
        cronograma1 = Cronograma.objects.create(**self.cronograma)
        response = self.client.get('/api/cronogramas/' + f'?search={cronograma1.titulo}')

        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data[0]['titulo'], cronograma1.titulo)
    
    def test_get_cronogramas_by_aluno(self):
        cronograma1 = Cronograma.objects.create(
            privacidade=False,
            titulo='Cronograma de Estudos',
            aluno=self.aluno
        )
        cronograma2 = Cronograma.objects.create(
            privacidade=True,
            titulo='Cronograma Pessoal',
            aluno=self.aluno
        )

        response = self.client.get('/api/cronogramas/', {'aluno': self.aluno.id})

        self.assertEqual(response.status_code, status.HTTP_200_OK)
        data = response.data
        self.assertEqual(data[0]['titulo'], 'Cronograma de Estudos')
        self.assertEqual(data[1]['titulo'], 'Cronograma Pessoal')
        self.assertEqual(data[0]['aluno'], self.aluno.id)
        self.assertEqual(data[1]['aluno'], self.aluno.id)