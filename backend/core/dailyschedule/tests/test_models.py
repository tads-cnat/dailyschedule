from django.test import TestCase
from models import Aluno, Cronograma

class AlunoTestCase(TestCase):
    
    def setUp(self):
        self.aluno1 = Aluno(first_name='João', last_name='Silva', email='joao@example.com', username='joao123', password='senha123')
        self.aluno2 = Aluno(first_name='João', last_name='Silva', email='joao@example.com', username='joao123', password='senha123')
        self.aluno3 = Aluno(first_name='Maria', last_name='Santos', email='maria@example.com', username='maria456', password='senha456')

    def test_aluno_eq_same_objects(self):
        self.assertEqual(self.aluno1, self.aluno1)

    def test_aluno_eq_equal_objects(self):
        self.assertEqual(self.aluno1, self.aluno2)

    def test_aluno_eq_different_objects(self):
        self.assertNotEqual(self.aluno1, self.aluno3)

    def test_aluno_ordering(self):
        self.assertLess(self.aluno2, self.aluno1)
        self.assertLessEqual(self.aluno1, self.aluno3)
        self.assertGreater(self.aluno1, self.aluno2)
        self.assertGreaterEqual(self.aluno1, self.aluno1)

class CronogramaTestCase(TestCase):
    
    def setUp(self):
        self.aluno = Aluno.objects.create(nome="João")
        self.cronograma1 = Cronograma.objects.create(privacidade=False, titulo="Cronograma 1", aluno=self.aluno)
        self.cronograma2 = Cronograma.objects.create(privacidade=True, titulo="Cronograma 2", aluno=self.aluno)
    
    def test_equals_same_instance(self):
        self.assertTrue(self.cronograma1.equals(self.cronograma1))
    
    def test_equals_different_instances_same_values(self):
        cronograma = Cronograma(privacidade=False, titulo="Cronograma 1", aluno=self.aluno)
        self.assertTrue(self.cronograma1.equals(cronograma))
    
    def test_equals_different_instances_different_values(self):
        cronograma = Cronograma(privacidade=True, titulo="Cronograma 3", aluno=self.aluno)
        self.assertFalse(self.cronograma1.equals(cronograma))
    
    def test_compareTo_different_instances(self):
        cronograma = Cronograma(privacidade=False, titulo="Cronograma 2", aluno=self.aluno)
        self.assertLess(self.cronograma1.compareTo(cronograma), 0)
        self.assertGreater(cronograma.compareTo(self.cronograma1), 0)

