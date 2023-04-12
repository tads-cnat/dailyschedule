/* eslint-disable no-undef */
import "./styles.css"
import ComputadorImg from "../../assets/images/computador.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from '../Navbar/Navbar/Navbar.js'


const Cadastro = () => {
    const [primeiro_nome, setPrimeiro_nome] = useState("");
    const [ultimo_nome, setUltimo_nome] = useState("");
    const [usuario , setUsuario] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [comfirmar_senha, setcomfirmar_senha] = useState("");
    const [err, setErr] = useState(false);

    const navigate = useNavigate();


    async function handleSubmit(event) {
        event.preventDefault();
        
        const request = await fetch("http://localhost:8000/api/auth/cadastro/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                primeiro_nome,
                ultimo_nome,
                usuario,
                email,
                senha,
                comfirmar_senha,
            }),
        });
        if (senha !== comfirmar_senha) {
            setErr(true);
            return;
        }

        const response = await request.json();
        console.log(response);

        if (request.status === 200) {
            localStorage.setItem("token", response.token);
            navigate("/login");
        }
        if(request.status === 400){
            setErr(true);

        }
    }

    const handlerPrimeiro_nome = (event) => {
        setPrimeiro_nome(event.target.value);
    }
    const handlerUltimo_nome = (event) => {
        setUltimo_nome(event.target.value);
    }
    const handlerUsuario = (event) => {
        setUsuario(event.target.value);
    }
    const handlerEmail = (event) => {
        setEmail(event.target.value);
    }
    const handlerSenha = (event) => {
        setSenha(event.target.value);
    }
    const handlerComfirmar_senha = (event) => {
        setcomfirmar_senha(event.target.value);
    }

    return (
        <div>
            <NavBar />
            <section id="login">
                <h2>Cadastre-se ou <a href="http://localhost:3000/login" target="_blank">entre</a> agora!</h2>
                <h2>Organize suas tarefas de forma eficiente com seu</h2>
                <h1>Daily Schedule!</h1>
                <form onSubmit={handleSubmit} id="entrar">
                    <label htmlFor="primeiro_nome">Nome</label>
                    <br/>
                    <input type="text" id="primeiro_nome" value={primeiro_nome} onChange={handlerPrimeiro_nome} />
                    <br/>
                    <br/>
                    <label htmlFor="ultimo_nome">Sobrenome</label>
                    <br/>
                    <input type="text" id="ultimo_nome" value={ultimo_nome} onChange={handlerUltimo_nome} />
                    <br/>
                    <br/>
                    <label htmlFor="usuario">Usuário</label>
                    <br/>
                    <input type="text" id="usuario" value={usuario} onChange={handlerUsuario} />
                    <br/>
                    <br/>
                    <label htmlFor="email">E-mail</label>
                    <br/>
                    <input type="email" id="email" value={email} onChange={handlerEmail} />
                    <br/>
                    <br/>
                    <label htmlFor="senha">Senha</label>
                    <br/>
                    <input type="password" id="senha" value={senha} onChange={handlerSenha} />
                    <br/>
                    <br/>
                    <label htmlFor="comfirmar_senha">Confirmar senha</label>
                    <br/>
                    <input type="password" id="comfirmar_senha" value={comfirmar_senha} onChange={handlerComfirmar_senha} />
                    <br/>
                    {err && <p>As senhas não são iguais</p>}
                    <button type="submit">Cadastrar</button>
                </form>
                <img src={ComputadorImg} alt="computador"/>
            </section>
        </div>
    )

}

export default Cadastro;