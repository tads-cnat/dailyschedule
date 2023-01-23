import "./style.css"
import ComputadorImg from "../../assets/images/computador.png"
import NavBar from '../Navbar/Navbar/Navbar.js'
import { useState } from 'react';
import { Navigate, useNavigate} from 'react-router-dom'



const Login = () => {
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [err, setErr] = useState(false)
    const navigate = useNavigate()

    /*
    Caso codigo 200 -> Sucesso
        -> Adiciona Token no local Storage
            localStorage.SetItem(TOKEN_KEY, token)
        -> Redireciona para pagina de aplicação
            navigate('/app')
    Caso codigo 401 -> Não autorizado
        -> muda o status do erro
            setErr(true)
    */


    async function handleSubmit (event) {

        const request = await fetch('localhost/api/login', {
            method: 'POST',
            headers:{
                'Content-Type': 'application/json',
            },
            body: {
                'usuario': email,
                'senha': senha,
            }
        }).then(console.log(request))



        event.preventDefault();
      }

    const handlerEmail = (event) => {
        setEmail(event.target.value)
    }

    const handlerSenha = (event) => {
        setSenha(event.target.value)
    }


    return(
        <div>
            <NavBar />
            <section id="login">
                <h2>Entre ou <a href="cadastro" target="_blank">cadastre-se</a> agora!</h2>
                <h2>Organize suas tarefas de forma eficiente com seu</h2>
                <h1>Daily Schedule!</h1>
                <form action="" method="POST" onSubmit={handleSubmit} id="entrar">
                    <label for="email">E-mail/username</label>
                    <br/>
                    <input type="email" name="email" id="email" placeholder="Insira seu nome de usuario" required title="Insira seu nome de usuário" value = {email} onChange = {handlerEmail}/>
                    <br/><br/>
                    <label for="password">Senha</label>
                    <br/>
                    <input type="password" name="password" id="password" placeholder="Insira sua senha" required title="Insira sua senha" value = {senha} onChange={handlerSenha}/>
                    <br/>
                    <span>{`${err ? "Email ou senha Erradas" : "" }`}</span>
                    <br/><br/>
                    <button type="submit" >Entrar</button>
                </form>

                <img src={ ComputadorImg } alt="Computador"/>
            </section>
        </div>
    )
}

export default Login