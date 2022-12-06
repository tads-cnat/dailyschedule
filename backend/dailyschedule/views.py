from django.shortcuts import render

from django.http.response import JsonResponse
from rest_framework.parsers import JSONParser 
from rest_framework import status
 
from .models import Cronograma, Tarefa, Aluno
from .serializers import SerializadorCronograma, SerializadorTarefa, SerializadorAluno
from rest_framework.decorators import api_view

@api_view(['GET', 'POST', 'DELETE'])
def aluno_list(request):
    if request.method == 'GET':
        alunos = Aluno.objects.all()

        nome = request.query_params.get('nome',None)
        if nome is not None:
            alunos = alunos.filter(nome__icontains=nome)
        
        serializa_aluno = SerializadorAluno(alunos, many=True)
        return JsonResponse(serializa_aluno.data, safe=False)

    elif request.method == 'POST':
        aluno_data = JSONParser().parse(request)
        serializa_aluno = SerializadorAluno(data=aluno_data)
        if serializa_aluno.is_valid():
            serializa_aluno.save()
            return JsonResponse(serializa_aluno.data, status=status.HTTP_201_CREATED)
        return JsonResponse(serializa_aluno.errors, status=status.HTTP_400_BAD_REQUEST)
    
    elif request.method == 'DELETE':
        count = Aluno.objects.all().delete()
        return JsonResponse({'message': '{} Os alunos foram deletados com sucesso!'.format(count[0])}, status=status.HTTP_204_NO_CONTENT)

@api_view(['GET', 'PUT', 'DELETE'])
def aluno_detail(request, pk):
    try:
        aluno = Aluno.objects.get(pk=pk)
    
    except Aluno.DoesNotExist:
        return JsonResponse({'messsage': 'O aluno não existe.'}, status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializa_aluno = SerializadorAluno(aluno)
        return JsonResponse(serializa_aluno)
    
    elif request.method == 'PUT':
        aluno_data = JSONParser().parse(request)
        serializa_aluno = SerializadorAluno(aluno, data = aluno_data)
        if serializa_aluno.is_valid():
            serializa_aluno.save()
            return JsonResponse(serializa_aluno.data)
    
    elif request.method == 'DELETE':
        aluno.delete()
        return JsonResponse({'message': 'Alunso deletado com sucesso!'}, status=status.HTTP_204_NO_CONTENT)

