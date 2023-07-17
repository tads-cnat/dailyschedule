/* eslint-disable no-undef */
import './styles.css';
import ComputadorImg from '../../assets/images/computador.png';
import {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import NavBar from '../Navbar/Navbar/Navbar.js';
import Swal from 'sweetalert2';

const Cadastro = () => {
	const [primeiro_nome, setPrimeiro_nome] = useState('');
	const [ultimo_nome, setUltimo_nome] = useState('');
	const [usuario, setUsuario] = useState('');
	const [email, setEmail] = useState('');
	const [senha, setSenha] = useState('');
	const [comfirmar_senha, setcomfirmar_senha] = useState('');
	const [err, setErr] = useState(false);

	const navigate = useNavigate();

	useEffect(() => {
		const savedPNome = localStorage.getItem('primeiro_nome');
    const savedUNome = localStorage.getItem('ultimo_nome');
		const savedUser = localStorage.getItem('usuario');
    const savedEmail = localStorage.getItem('email');
    const savedSenha = localStorage.getItem('senha');
    const savedCSenha = localStorage.getItem('hora');

    if (savedPNome) setPrimeiro_nome(savedPNome);
    if (savedUNome) setUltimo_nome(savedUNome);
		if (savedUser) setUsuario(savedUser);
		if (savedEmail) setEmail(savedEmail);
		if (savedSenha) setSenha(savedSenha);
		if (savedCSenha) setcomfirmar_senha(savedCSenha);

		const timeoutId = setTimeout(() => {
      localStorage.removeItem('primeiro_nome');
			localStorage.removeItem('ultimo_nome');
			localStorage.removeItem('usuario');
			localStorage.removeItem('email');
			localStorage.removeItem('senha');
			localStorage.removeItem('hora');
    }, 30);
    return () => clearTimeout(timeoutId);
	}, []);

	useEffect(() => {
    localStorage.setItem('primeiro_nome', primeiro_nome);
    localStorage.setItem('ultimo_nome', ultimo_nome);
		localStorage.setItem('usuario', usuario);
		localStorage.setItem('email', email);
		localStorage.setItem('senha', senha);
		localStorage.setItem('comfirmar_senha', comfirmar_senha);
  }, [primeiro_nome, ultimo_nome, usuario, email, senha, comfirmar_senha]);

	async function handleSubmit(event) {
		event.preventDefault();

		const request = await fetch('http://localhost:8000/api/auth/cadastro/', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
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
			localStorage.setItem('token', response.token);
			Swal.fire({
				icon: 'success',
				title: 'Cadastro realizado',
				text: 'Seu cadastro foi concluído com sucesso!',
			});
			navigate('/login');
		}
		if (request.status === 400) {
			setErr(true);
		}
	}

	const handlerPrimeiro_nome = (event) => {
		setPrimeiro_nome(event.target.value);
	};
	const handlerUltimo_nome = (event) => {
		setUltimo_nome(event.target.value);
	};
	const handlerUsuario = (event) => {
		setUsuario(event.target.value);
	};
	const handlerEmail = (event) => {
		setEmail(event.target.value);
	};
	const handlerSenha = (event) => {
		setSenha(event.target.value);
	};
	const handlerComfirmar_senha = (event) => {
		setcomfirmar_senha(event.target.value);
	};

	return (
		<div>
			<NavBar />
			<section id="login">
				<h2>
					Cadastre-se ou{' '}
					<a
						href="http://localhost:3000/login"
						target="_blank"
						rel="noreferrer"
					>
						entre
					</a>{' '}
					agora!
				</h2>
				<h2>Organize suas tarefas de forma eficiente com seu</h2>
				<h1>Daily Schedule!</h1>
				<form onSubmit={handleSubmit} id="entrar">
					<label htmlFor="primeiro_nome">Nome</label>
					<br />
					<input
						type="text"
						id="primeiro_nome"
						value={primeiro_nome}
						onChange={handlerPrimeiro_nome}
						placeholder="Ex.: Maria"
					/>
					<br />
					<br />
					<label htmlFor="ultimo_nome">Sobrenome</label>
					<br />
					<input
						type="text"
						id="ultimo_nome"
						value={ultimo_nome}
						onChange={handlerUltimo_nome}
						placeholder="Ex.: Silva"
					/>
					<br />
					<br />
					<label htmlFor="usuario">Usuário</label>
					<br />
					<input
						type="text"
						id="usuario"
						value={usuario}
						onChange={handlerUsuario}
						placeholder="Ex.: maria"
					/>
					<br />
					<br />
					<label htmlFor="email">E-mail</label>
					<br />
					<input
						type="email"
						id="email"
						value={email}
						onChange={handlerEmail}
						placeholder="Ex.: maria@mail.com"
					/>
					<br />
					<br />
					<label htmlFor="senha">Senha</label>
					<br />
					<input
						type="password"
						id="senha"
						value={senha}
						onChange={handlerSenha}
						placeholder="Insira uma senha"
					/>
					<br />
					<br />
					<label htmlFor="comfirmar_senha">Confirmar senha</label>
					<br />
					<input
						type="password"
						id="comfirmar_senha"
						value={comfirmar_senha}
						onChange={handlerComfirmar_senha}
						placeholder="Confirme a senha"
					/>
					<br />
					{err && <p>As senhas não são iguais</p>}
					<button type="submit">Cadastrar</button>
				</form>
				<img src={ComputadorImg} alt="computador" />
			</section>
		</div>
	);
};

export default Cadastro;
