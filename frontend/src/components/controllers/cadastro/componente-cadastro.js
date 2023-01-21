import { novoUser } from "../cadastro/cadastro.js";

export default function cadastro(){
  const form = document.querySelector('form');
  novoUser(form);
  return form;
}