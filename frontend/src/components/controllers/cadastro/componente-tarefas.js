/* eslint-disable no-undef */
import { criarTarefa } from "../cadastro/cadastro.js";
import { getCronogramas } from "../../api/api.js"

export default function tarefa(){
  const form = document.querySelectorAll('.crono-info1');
  form.forEach(e => {
    criarTarefa(e);
    return form;
  })
}