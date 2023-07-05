from django.test import TestCase
from django.contrib.auth import get_user_model
from django.urls import reverse, resolve
from rest_framework import status
import json
from .models import Aluno, Cronograma

User = get_user_model()

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
