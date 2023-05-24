from django.test import TestCase
from models import Aluno

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