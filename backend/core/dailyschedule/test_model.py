from django.test import TestCase
from .models import Tarefa, Cronograma, Aluno
from django.utils import timezone
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

    def test_tarefa_ordering(self):
        self.assertLess(self.tarefa1, self.tarefa2)
        self.assertLessEqual(self.tarefa2, self.tarefa3)
        self.assertGreater(self.tarefa3, self.tarefa2)
        self.assertGreaterEqual(self.tarefa2, self.tarefa1, "Tarefa2 não é maior ou igual a Tarefa1") # type: ignore