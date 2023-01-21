import './style.css'
import ComputadorImg from "../../assets/images/computador.png"
import NavBar from '../Navbar/Navbar/Navbar.js'

const Cadastro = () => {
  return (
    <div>
      <NavBar />
      <section id="login">
        <h2>Cadastre-se ou <a href="/login" target="_blank">entre</a> agora!</h2>
        <h2>Organize suas tarefas de forma eficiente com seu</h2>
        <h1>Daily Schedule!</h1>
        <form id="cadastro">
          <label for="name">Nome</label>
          <br/>
          <input type="text" name="name" id="name" placeholder="Insira seu nome" required title="Insira seu nome"/>
          <br/><br/>
          <label for="email">E-mail</label>
          <br/>
          <input type="email" name="email" id="email" placeholder="Insira um e-mail" required title="Insira um e-mail"/>
          <br/><br/>
          <label for="user">Username</label>
          <br/>
          <input type="text" name="user" id="user" placeholder="Insira um username" required title="Insira um username"/>
          <br/><br/>
          <label for="password">Senha</label>
          <br/>
          <input type="password" name="password" id="password" placeholder="Insira sua senha" required title="Insira sua senha"/>
          <br/><br/>
          <button class="btnCad" type="submit">Salvar</button>
        </form>

        <img src={ ComputadorImg } alt="Computador"/>
      </section>
    </div>
  )
}

export default Cadastro;