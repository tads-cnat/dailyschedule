/* eslint-disable no-undef */
import React from 'react';
import {useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import Sidebar from '../Navbar/Sidebar';
import './style.css';
import profile from '../Perfil/profile.png';

function Perfil() {
	const id = localStorage.getItem('token');
	const [aluno, setAluno] = useState([]);
	const navigate = useNavigate();

	const tarefaUpdate = () => {};

	useEffect(() => {
		if (id == null) {
			navigate('/');
		}
		const loadData = () => {
			fetch(`http://localhost:8000/api/alunos/${id}`)
				.then((response) => response.json())
				.then((data) => setAluno(data));
		};
		loadData();
	}, []);

	console.log(aluno.notificacao);

	return (
		<div>
			<Sidebar></Sidebar>
			<header className="header">
				<h2>Perfil</h2>
			</header>

			<section className="perfil">
				<div>
					<img className="picture" src={profile} alt="profile" /> <br />
					<strong>Nome:</strong> {aluno.first_name} {aluno.last_name} <br />
					<div><strong>Email:</strong> {aluno.email}</div>
					<div><strong>Usuário:</strong> {aluno.username}</div>
					<div>
					<strong>Notificações:</strong> {aluno.notificacao ? 'ativas' : ' inativas'}
						<button className="perfil-optbtn" onClick={() => tarefaUpdate()}>
							{aluno.notificacao ? 'Desativar' : ' Ativar'}
						</button>
					</div>
				</div>
			</section>
		</div>
	);
}

export default Perfil;
