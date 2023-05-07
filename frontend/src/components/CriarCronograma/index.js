/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import '../style.css';
import { useState, useEffect } from 'react';
import Sidebar from '../Navbar/Sidebar/index.js';
import { useNavigate } from 'react-router-dom';
import FormCrono from '../Forms/FormCrono';

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
  }, []);

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
    alert('Tarefa Cadastrada!');
  };

  function activeTab(index) {
    tabContent.forEach((section) => {
      section.classList.remove('ativo');
    });
    tabContent[index].classList.add('ativo', tabContent[index].dataset.anime);
  }

  function handleClick(_e) {
    const tabMenu = document.querySelectorAll('[data-tab="menu"] button');
    const tabContent = document.querySelectorAll('[data-tab="content"] form');
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
    <div>
      <Sidebar />
      <header className="header">
        <h2>Criar cronograma</h2>
        <p>
          Insira as informações abaixo para criarmos um cronograma pensado para
          você!
        </p>
      </header>

      <div className="options" data-tab="menu">
        <button onClick={handleClick}>Informações</button>
        <button onClick={handleClick}>Aulas</button>
        <button onClick={handleClick}>Matérias</button>
        <button onClick={handleClick}>Provas</button>
        <button onClick={handleClick}>Afazeres</button>
        <button onClick={handleClick}>Horários Vagos</button>
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
          </div>
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
          valueDate={hora || ''}
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
          valueDate={hora || ''}
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
          valueDate={hora || ''}
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
          valueDate={hora || ''}
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
          valueDate={hora || ''}
        />
      </section>
    </div>
  );
};

export default CriarCrono;
