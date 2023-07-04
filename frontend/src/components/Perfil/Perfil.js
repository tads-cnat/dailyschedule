/* eslint-disable no-undef */
import React from 'react';
import {useEffect, useState} from 'react';
import Sidebar from '../Navbar/Sidebar';
import './style.css';
import profile from '../Perfil/profile.png';
import { Alert, Space } from 'antd';
import NoAuthenticated from '../Functions/NoAuthenticated';

function Perfil() {
	const id = localStorage.getItem('token');
	const [aluno, setAluno] = useState([]);

	var ntf = aluno.notificacao

	const alunoPUT = {
		username: aluno.username,
		email: aluno.email,
		first_name: aluno.first_name,
		last_name: aluno.last_name,
		password: aluno.password,
		qtd: aluno.qtd,
		notificacao: !ntf
	}
	const tarefaUpdate = () => {
		fetch(`http://localhost:8000/api/alunos/${id}/`, {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(alunoPUT),
		}).then((res) => res.json());
		alert('Notificações editadas!' + ntf);
	}
	

	useEffect(() => {		
		const loadData = () => {
			fetch(`http://localhost:8000/api/alunos/${id}/`)
				.then((response) => response.json())
				.then((data) => setAluno(data))
				.catch((error) => {
					console.error('Error fetching: ', error);
					setError(error);
				});		
		};
		loadData();
	}, []);

	console.log(aluno.notificacao);

	return (
		<div>
			<NoAuthenticated /> 
			<Sidebar></Sidebar>
			<section className='card-user'>	
				<Space className='notif'
					direction="vertical"
					style={{
					width: '100%',
					}}>
						
					<Alert
					message="Success Tips"
					type="success"
					showIcon
					
					closable
					/>
				</Space>
				<section className="perfilHder">
					<h2 className="tittle">Perfil</h2>
				</section>

				<section className="perfil">
					<div>
						<img className="picture" src={profile} alt="profile" /> <br />
						<div className='conteudo'>
						Nome: {aluno.first_name} {aluno.last_name} <br />
						<div>Email: {aluno.email}</div>
						<div>Usuário: {aluno.username}</div>
						<div>
							Notificações: {aluno.notificacao ? 'ativas' : ' inativas'}
							<button className="perfil-optbtn" onClick={() => tarefaUpdate()}>
								{aluno.notificacao ? 'Desativar' : ' Ativar'}
							</button>
							{aluno.notificacao ? ntf=false : ntf=true}
						</div>	
						</div>
						
					</div>
				</section>
			</section>
		</div>
	);
}

export default Perfil;
