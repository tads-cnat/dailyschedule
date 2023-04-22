import "./style.css"
import ComputadorImg from "../../assets/images/computador.png"
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
        event.preventDefault();
        
        const request = await fetch('http://localhost:8000/api/auth/login/', {
            method: 'POST',
            headers:{
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                'usuario': email,
                'senha': senha,
            })
        })
        const response = await request.json()
        console.log(response)

        if (request.status === 200) {
            localStorage.setItem('token', response.user)
            navigate('/criar-cronograma')
        }
        if (request.status === 401) {
            setErr(true)
        }

      }

    const handlerEmail = (event) => {
        setEmail(event.target.value)
    }

    const handlerSenha = (event) => {
        setSenha(event.target.value)
    }
    return(
        <section id="login">
            <h2>Entre ou <a href="cadastro.html" target="_blank">cadastre-se</a> agora!</h2>
            <h2>Organize suas tarefas de forma eficiente com seu</h2>
            <h1>Daily Schedule!</h1>
            <form onSubmit={handleSubmit} id="entrar">
                <label htmlFor="email">E-mail/username</label>
                <br/>
                <input type="text" name="email" id="email" placeholder="Insira seu nome de usuario" required title="Insira seu nome de usuário" value = {email} onChange = {handlerEmail}/>
                <br/><br/>
                <label htmlFor="password">Senha</label>
                <br/>
                <input type="password" name="password" id="password" placeholder="Insira sua senha" required title="Insira sua senha" value = {senha} onChange={handlerSenha}/>
                <br/>
                <span>{`${err ? "Email ou senha Erradas" : "" }`}</span>
                <br/><br/>
                <button type="submit" >Entrar</button>
            </form>

            <img src={ ComputadorImg } alt="Computador"/>
        </section>
    )   
}

export default Login