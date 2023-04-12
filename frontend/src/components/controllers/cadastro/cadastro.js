/* eslint-disable no-undef */
import { postAlunos, postCronogramas, postTarefas, getCronogramas } from "../../api/api.js"

export function novoUser(form){
  form.addEventListener('submit', e => {
    e.preventDefault();

    const nome = document.querySelector('#name').value;
    const usuario = document.querySelector('#user').value;
    const senha = document.querySelector('#password').value;

    postAlunos(nome, usuario, senha);
  })
}

export function criarCronograma(form){
  form.addEventListener('submit', e => {
    e.preventDefault(); 
    let privacidade = false;
    if (document.querySelector('input[type="radio"]').value == 1) privacidade = true;
    const titulo = document.querySelector('#titulo_cronograma').value;
    const aluno = 1

    console.log(privacidade, titulo, aluno)
    postCronogramas(privacidade, titulo, aluno);
  })
}

export function criarTarefa(form){
  form.addEventListener('submit', e => {
    e.preventDefault(); 

    const titulo = document.querySelector('#titulo').value;
    const assunto = document.querySelector('#assunto').value;
    const descricao = document.querySelector('#descricao').value;
    const hora = document.querySelector('#hora').value;
    const data = document.querySelector('#data').value;

    getCronogramas().then(crono => postTarefas(titulo, assunto, descricao, hora, data, true, crono[crono.length-1].id))
  })
}