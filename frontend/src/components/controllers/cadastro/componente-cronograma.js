import { criarCronograma } from "../cadastro/cadastro.js";

export default function cronograma(){
  const form = document.querySelector('.crono-info');
  criarCronograma(form);
  return form;
}