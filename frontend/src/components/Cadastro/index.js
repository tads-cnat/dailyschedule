import './style.css'
import ComputadorImg from "../../assets/images/computador.png"
import NavBar from '../Navbar/Navbar/Navbar.js'
import { useState } from 'react';

const Cadastro = () => {
  const [primeiro_nome, setPrimeiroNome] = useState("")
  const [ultimo_nome, setUltimoNome] = useState("")
  const [usuario, setUsuario] = useState(false)
  const [email, setEmail] = useState("")
  const [senha, setSenha] = useState("")
  const [confirma_senha, setConfirmaSenha] = useState("")

  const  postUsuario = async (e) => {
    e.preventDefault();
    const usuarios = {
      first_name: primeiro_nome,
      last_name: ultimo_nome,
      username: usuario,
      email: email,
      password: senha,
      confirmed_password: confirma_senha
    }

    console.log(usuarios)
    
    await fetch("http://localhost:8000/api/auth/cadastro/", {
      method:"POST",
      headers: {
        'Content-Type': 'application/json',
      },  
      body: JSON.stringify(usuarios)
    }).then(res => res.json());
  }

  return (
    <div>
      <NavBar />
      <section id="login">
        <h2>Cadastre-se ou <a href="/login" target="_blank">entre</a> agora!</h2>
        <h2>Organize suas tarefas de forma eficiente com seu</h2>
        <h1>Daily Schedule!</h1>
        <form id="cadastro" onSubmit={postUsuario}>
          <label htmlFor="name">Nome</label>
          <br/>
          <input type="text" name="name" id="name" placeholder="Insira seu nome" required title="Insira seu nome" onChange={(e) => setPrimeiroNome(e.target.value)} value={primeiro_nome || ""} />
          <br/><br/>
          <label htmlFor="name">Sobrenome</label>
          <br/>
          <input type="text" name="name" id="lastname" placeholder="Insira seu sobrenome" required title="Insira seu sobrenome" onChange={(e) => setUltimoNome(e.target.value)} value={ultimo_nome || ""} />
          <br/><br/>
          <label htmlFor="email">E-mail</label>
          <br/>
          <input type="email" name="email" id="email" placeholder="Insira um e-mail" required title="Insira seu e-mail" onChange={(e) => setEmail(e.target.value)} value={email || ""} />
          <br/><br/>
          <label htmlFor="user">Nome de usuário</label>
          <br/>
          <input type="text" name="user" id="user" placeholder="Insira um username" required title="Insira seu username" onChange={(e) => setUsuario(e.target.value)} value={usuario || ""} />
          <br/><br/>
          <label htmlFor="password">Senha</label>
          <br/>
          <input type="password" name="password" id="password" placeholder="Insira sua senha" required title="Insira sua senha" onChange={(e) => setSenha(e.target.value)} value={senha || ""} />
          <br/><br/>
          <label htmlFor="password">Confirme sua senha</label>
          <br/>
          <input type="password" name="password" id="confirmedpassword" placeholder="Insira sua senha" required title="Confirme sua senha" onChange={(e) => setConfirmaSenha(e.target.value)} value={confirma_senha || ""} />
          <br/><br/>
          <button className="btnCad" type="submit">Salvar</button>
        </form>

        <img src={ ComputadorImg } alt="Computador"/>
      </section>
    </div>
  )
}

export default Cadastro;