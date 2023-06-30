/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import '../style.css';
import {useState, useEffect, useRef} from 'react';
import SideBar from '../Navbar/Sidebar';
import {
	BsFillTrashFill,
	BsPencilSquare,
	BsFillCloudSunFill,
} from 'react-icons/bs';
import {useReactToPrint} from 'react-to-print';
import {redirect, useParams, useNavigate} from 'react-router-dom';
import NoAuthenticated from '../Functions/NoAuthenticated';

const Editar = () => {
	const id = localStorage.getItem('token');

	const navigate = useNavigate();
	const [previsao, setPrevisao] = useState([]);
	const [cronogramas, setCronogramas] = useState([]);
	const [tarefas, setTarefas] = useState([]);

	const [titulo_cronograma, setTituloCronograma] = useState('');
	const [privacidade, setPrivado] = useState(false);

	var semana = [
		'Domingo',
		'Segunda-Feira',
		'Terça-Feira',
		'Quarta-Feira',
		'Quinta-Feira',
		'Sexta-Feira',
		'Sábado',
	];

	const params = useParams();
	const ID = params.id;

	console.log('ID do cornograma: ' + ID);

	const componentRef = useRef();

	useEffect(() => {
		setPrevisao('Ver previsão de hoje');
		const loadData = async (e) => {
			fetch(`http://localhost:8000/api/cronogramas/${ID}/`)
				.then((crono) => crono.json())
				.then((data) => setCronogramas(data))
				.catch((err) => {
					console.error(err);
				});
		};
		const loadTarefas = async (e) => {
			fetch(`http://localhost:8000/api/cronogramas/${ID}/tarefas/`)
				.then((res) => res.json())
				.then((data) => setTarefas(data))
				.catch((err) => {
					console.error(err);
				});
		};
		loadData();
		loadTarefas();
		console.log('Id do cronograma crono: ' + cronogramas.id);
	}, [ID]);

	const handleDelete = async (id) => {
		await fetch(`http://localhost:8000/api/cronogramas/${ID}/`, {
			method: 'DELETE',
		});
		navigate('/MeusCronogramas');
	};

	const postCronogramas = async (e) => {
		e.preventDefault();
		const cronograma = {
			//privacidade: Boolean(privacidade),
			titulo: titulo_cronograma,
			//aluno: 1
		};

		console.log('Dentro do PUT: ' + JSON.stringify(cronograma));

		await fetch(`http://localhost:8000/api/cronogramas/${cronogramas.id}/`, {
			method: 'PUT',

			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(cronograma),
		}).then((res) => res.json());
	};

	function activeTab(index) {
		tabContent.forEach((section) => {
			section.classList.remove('ativo');
		});
		tabContent[index].classList.add('ativo', tabContent[index].dataset.anime);
	}

	return (
		<div>
			<NoAuthenticated /> 
			<SideBar />
			<header className="header">
				<h2>Meus cronogramas</h2>

				<div>
					<form
						onSubmit={postCronogramas}
						className="crono-crono"
						method="post"
					>
						<label htmlFor="titulo">Insira o nome do seu cronograma: </label>
						<h3>
							<input
								className="crono-title"
								type="text"
								name="titulo"
								id="titulo_cronograma"
								onChange={(e) => setTituloCronograma(e.target.value)}
								value={titulo_cronograma || cronogramas.titulo}
							/>
						</h3>
						<div className="crono-priv-editar">
							<input
								type="checkbox"
								name="priv"
								id="privado"
								onChange={(e) => setPrivado(e.target.value)}
								checked={privacidade || cronogramas.privacidade}
							/>
							<label htmlFor="priv">Quero que seja privado</label>
						</div>

						<button className="crono-send" type="submit">
							Salvar alterações
						</button>
					</form>

					<BsFillTrashFill
						className="trash"
						onClick={() => handleDelete(cronogramas.id)}
					/>

					{/* <BsPencilSquare className='pencil' onClick={() => console.log(titulo_cronograma + privacidade)}/> */}
				</div>
			</header>

			<section className="editar_visualizar">
				<table ref={componentRef}>
					<thead>
						<tr>
							<th className="horarios"> Data </th>
							<th className="horarios">Horário</th>
							<th className="tarefas">Tarefa</th>
							<th className="horarios">Editar</th>
						</tr>
					</thead>

					<tbody>
						{tarefas.map((tarefa) => (
							// eslint-disable-next-line react/jsx-key
							<tr>
								<td className="tbHora">
									{semana[new Date(tarefa.data).getDay()]}
								</td>
								<td className="tbHora">{tarefa.hora_inicio.slice(0, -3)}</td>
								<td className="tbTitulo">
									{tarefa.titulo} - {tarefa.descricao}
								</td>
								<td className="tbHora">
									<a href={`/Editar/${cronogramas.id}/Tarefa/${tarefa.id}`}>
										<BsPencilSquare className="editar" />
									</a>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</section>
		</div>
	);
};

export default Editar;
