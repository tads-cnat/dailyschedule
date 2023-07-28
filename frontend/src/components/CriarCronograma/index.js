/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import './style.css';
import {useState, useEffect} from 'react';
import Sidebar from '../Navbar/Sidebar/index.js';
import {useNavigate} from 'react-router-dom';
import FormCrono from '../Forms/FormCrono';
import Swal from 'sweetalert2';

const CriarCrono = () => {
	const [titulo, setTitulo] = useState('');
	const [titulo_cronograma, setTituloCronograma] = useState('');
	const [privacidade, setPrivado] = useState(false);
	let [assunto, setAssunto] = useState('');
	const [descricao, setDescricao] = useState('');
	const [hora, setHora] = useState('');
	const [data, setData] = useState('');

	const [cronogramas, setCronogramas] = useState([]);
	// eslint-disable-next-line
	const [tarefas, setTarefas] = useState([]);
	const [alunos, setAlunos] = useState([]);

	const data1 = data.split('/');
	const hora1 = hora.split(':');
	const dataOfc = new Date(
		data1[2],
		data1[1] - 1,
		data1[0],
		hora1[0],
		hora1[1],
	);
	const horaOfc = dataOfc.getHours() + ':' + dataOfc.getMinutes();

	const id = localStorage.getItem('token');
	const navigate = useNavigate();

	console.log('ID do usuário: ' + id);
	useEffect(() => {
		if (id == null) {
			navigate('/');
		}

		const loadData = async (_e) => {
			const res = await fetch('http://localhost:8000/api/cronogramas/')
				.then((res) => res.json())
				.then((data) => data);
			setCronogramas(res);

			const rest = await fetch('http://localhost:8000/api/tarefas/')
				.then((res) => res.json())
				.then((data) => data);
			setTarefas(rest);

			const resa = await fetch('http://localhost:8000/api/alunos/')
				.then((res) => res.json())
				.then((data) => data);
			setAlunos(resa);
		};
		loadData();

		const savedTituloCrono = localStorage.getItem('titulo_cronograma');
    const savedPrivacidade = localStorage.getItem('privacidade');
		const savedTitulo = localStorage.getItem('titulo');
    const savedAssunto = localStorage.getItem('assunto');
    const savedDescricao = localStorage.getItem('descricao');
    const savedHora = localStorage.getItem('hora');
    const savedData = localStorage.getItem('data');

    if (savedTituloCrono) setTituloCronograma(savedTituloCrono);
    if (savedPrivacidade) setPrivado(savedPrivacidade === 'true');
		if (savedTitulo) setTitulo(savedTitulo);
		if (savedAssunto) setAssunto(savedAssunto);
		if (savedDescricao) setDescricao(savedDescricao);
		if (savedHora) setHora(savedHora);
		if (savedData) setData(savedData);

		const timeoutId = setTimeout(() => {
      localStorage.removeItem('titulo_cronograma');
			localStorage.removeItem('privacidade');
			localStorage.removeItem('titulo');
			localStorage.removeItem('assunto');
			localStorage.removeItem('descricao');
			localStorage.removeItem('hora');
			localStorage.removeItem('data');
    }, 30);
    return () => clearTimeout(timeoutId);
	}, []);

	useEffect(() => {
    localStorage.setItem('titulo_cronograma', titulo_cronograma);
    localStorage.setItem('privacidade', privacidade.toString());
		localStorage.setItem('titulo', titulo);
		localStorage.setItem('assunto', assunto);
		localStorage.setItem('descricao', descricao);
		localStorage.setItem('hora', hora);
		localStorage.setItem('data', data);
  }, [titulo_cronograma, privacidade, titulo, assunto, descricao, hora, data]);

	const postCronogramas = async (e) => {
		e.preventDefault();
		const cronogramas = {
			privacidade: Boolean(privacidade),
			titulo: titulo_cronograma,
			aluno: alunos[alunos.length - 1].id,
		};

		await fetch('http://localhost:8000/api/cronogramas/', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(cronogramas),
		}).then((res) => res.json());
		Swal.fire({
			icon: 'success',
			title: 'Aee, seu cronograma foi criado com sucesso!',
			text: 'Não esqueça de adicionar tarefas neles com as próximas etapas ;)',
		});
	};

	const postTarefas = async (e) => {
		e.preventDefault();

		if (assunto === '') assunto = 'none';
		console.log('tarefas');
		const tarefas = {
			titulo: titulo,
			assunto: assunto,
			descricao: descricao,
			hora_inicio: horaOfc,
			data: dataOfc,
			status: false,
			cronograma: 1,
		};

		await fetch('http://localhost:8000/api/tarefas/', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(tarefas),
		}).then((res) => res.json());
		Swal.fire({
			icon: 'success',
			title: 'Aí simm, sua tarefa foi cadastrada com sucesso!',
			text: 'Fique a vontade para adicionar quantas quiser.',
		});
	};

	const tabMenu = document.querySelectorAll('[data-tab="menu"] button');
	const tabContent = document.querySelectorAll('[data-tab="content"] form');

	function activeTab(index) {
		tabContent.forEach((section) => {
			section.classList.remove('ativo');
		});
		tabContent[index].classList.add('ativo', tabContent[index].dataset.anime);
	}

	function handleClick(index) {
		if (tabMenu.length && tabContent.length) {
			activeTab(index);
	
			tabMenu.forEach((itemMenu, index) => {
				itemMenu.addEventListener('click', () => {
					activeTab(index);
				});
			});
		}
	}

	return (
		<div id='criar-crono-page'>
			<Sidebar />
			<header className="header">
				<h2>Criar cronograma</h2>
				<p>
					Insira as informações abaixo para criarmos um cronograma pensado para
					você!
				</p>
			</header>

			<div className="options" data-tab="menu">
				<button onClick={() => handleClick(0)}>Informações</button>
				<button onClick={() => handleClick(1)}>Aulas</button>
				<button onClick={() => handleClick(2)}>Matérias</button>
				<button onClick={() => handleClick(3)}>Provas</button>
				<button onClick={() => handleClick(4)}>Afazeres</button>
				<button onClick={() => handleClick(5)}>Horários Vagos</button>
			</div>

			<section id="criar-crono" data-tab="content">
				<form onSubmit={postCronogramas} className="crono-info" method="post">
					<label htmlFor="titulo">Insira o nome do seu cronograma: </label>{' '}
					<br />
					<br />
					<input
						type="text"
						name="titulo"
						id="titulo_cronograma"
						onChange={(e) => setTituloCronograma(e.target.value)}
						value={titulo_cronograma || ''}
					/>{' '}
					<br />
					<div className="crono-priv">
						<br />
						<input
							type="radio"
							name="priv"
							id="privado"
							onChange={(e) => setPrivado(e.target.value)}
							value={privacidade || true}
						/>
						<label htmlFor="priv">Quero que seja privado</label>
					</div> <br/><br/>
					<button className="btncont" type="submit">
						Salvar
					</button>
				</form>
			</section>

			<section className="criar-crono1" data-tab="content">
				<FormCrono
					onSubmit={postTarefas}
					valueLabel="Informe a aula"
					onChangeTitulo={(e) => setTitulo(e.target.value)}
					valueTitulo={titulo || ''}
					onChangeDesc={(e) => setDescricao(e.target.value)}
					valueDesc={descricao || ''}
					onChangeHora={(e) => setHora(e.target.value)}
					valueHora={hora || ''}
					onChangeDate={(e) => setData(e.target.value)}
					valueDate={data || ''}
				/>
			</section>

			<section className="criar-crono1" data-tab="content">
				<FormCrono
					onSubmit={postTarefas}
					valueLabel="Informe a matéria"
					onChangeTitulo={(e) => setTitulo(e.target.value)}
					valueTitulo={titulo || ''}
					onChangeDesc={(e) => setDescricao(e.target.value)}
					valueDesc={descricao || ''}
					onChangeHora={(e) => setHora(e.target.value)}
					valueHora={hora || ''}
					onChangeDate={(e) => setData(e.target.value)}
					valueDate={data || ''}
				/>
			</section>

			<section className="criar-crono1" data-tab="content">
				<FormCrono
					onSubmit={postTarefas}
					valueLabel="Informe a prova"
					onChangeTitulo={(e) => setTitulo(e.target.value)}
					valueTitulo={titulo || ''}
					onChangeDesc={(e) => setDescricao(e.target.value)}
					valueDesc={descricao || ''}
					onChangeHora={(e) => setHora(e.target.value)}
					valueHora={hora || ''}
					onChangeDate={(e) => setData(e.target.value)}
					valueDate={data || ''}
				/>
			</section>

			<section className="criar-crono1" data-tab="content">
				<FormCrono
					onSubmit={postTarefas}
					valueLabel="Informe o afazer"
					onChangeTitulo={(e) => setTitulo(e.target.value)}
					valueTitulo={titulo || ''}
					onChangeDesc={(e) => setDescricao(e.target.value)}
					valueDesc={descricao || ''}
					onChangeHora={(e) => setHora(e.target.value)}
					valueHora={hora || ''}
					onChangeDate={(e) => setData(e.target.value)}
					valueDate={data || ''}
				/>
			</section>

			<section className="criar-crono1" data-tab="content">
				<FormCrono
					onSubmit={postTarefas}
					valueLabel="Se desejar, insira descanso"
					onChangeTitulo={(e) => setTitulo(e.target.value)}
					valueTitulo={titulo || ''}
					onChangeDesc={(e) => setDescricao(e.target.value)}
					valueDesc={descricao || ''}
					onChangeHora={(e) => setHora(e.target.value)}
					valueHora={hora || ''}
					onChangeDate={(e) => setData(e.target.value)}
					valueDate={data || ''}
				/>
			</section>
		</div>
	);
};

export default CriarCrono;
