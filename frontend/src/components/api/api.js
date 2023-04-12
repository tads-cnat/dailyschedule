/* eslint-disable no-undef */
async function getAlunos(){
  return fetch("http://localhost:8000/api/alunos/",{
    method:'GET',
    headers: {
      'Content-Type': 'application/json'
      },         
  })
  .then(resp=>resp.json())
}

async function postAlunos(nome, usuario, senha){
  
  return fetch("http://localhost:8000/api/alunos/",{
    method:'POST',
    headers: {
      'Content-Type': 'application/json',
    },  
    body: JSON.stringify({
      nome:nome,
      usuario:usuario,
      senha:senha
    })
  })
  .then(resp=>resp.json())
}

async function getCronogramas() {
  return fetch("http://localhost:8000/api/cronogramas/",{
    method:'GET',
    headers: {
      'Content-Type': 'application/json',
      },         
  })
  .then(resp=>resp.json())
}

async function postCronogramas(privacidade, titulo, aluno){
  return fetch("http://localhost:8000/api/cronogramas/", {
    method:'POST',
    headers: {
      'Content-Type': 'application/json',
    },  
    body: JSON.stringify({
      privacidade:privacidade,
      titulo:titulo,
      aluno:aluno
    })
  })
  .then(resp=>resp.json())
}

async function getTarefas() {
  return fetch("http://localhost:8000/api/tarefas/",{
    method:'GET',
    headers: {
      'Content-Type': 'application/json',
      },         
  })
  .then(resp=>resp.json())
}

async function postTarefas(titulo, assunto, descricao, hora, data, status, cronograma){
  return fetch("http://localhost:8000/api/tarefas/", {
    method:'POST',
    headers: {
      'Content-Type': 'application/json',
    },  
    body: JSON.stringify({
      titulo:titulo,
      assunto:assunto,
      descricao:descricao,
      hora_inicio:hora,
      data:data,
      status:status,
      cronograma:cronograma,
    })
  })
  .then(resp=>resp.json())
}

export{
  getAlunos,
  postAlunos,
  getCronogramas,
  postCronogramas,
  getTarefas,
  postTarefas
}