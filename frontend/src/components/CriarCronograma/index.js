import './style.css'
import { useState, useEffect } from "react";
import Sidebar from '../Navbar/Sidebar/index.js'

const CriarCrono = () => {

  const [titulo, setTitulo] = useState("")
  const [titulo_cronograma, setTituloCronograma] = useState("")
  const [privacidade, setPrivado] = useState(false)
  let [assunto, setAssunto] = useState("")
  const [descricao, setDescricao] = useState("")
  const [hora, setHora] = useState("")
  const [data, setData] = useState("")
  
  const [cronogramas, setCronogramas] = useState([])

  const data1 = data.split('/')
  const hora1 = hora.split(':')
  const dataOfc = new Date(data1[2], data1[1]-1, data1[0], hora1[0], hora1[1])
  const horaOfc = dataOfc.getHours() + ":" + dataOfc.getMinutes()

  console.log(dataOfc, horaOfc)

  useEffect(() => {
    const loadData = async(e) => {
      const res = await fetch("http://127.0.0.1:8000/api/cronogramas/").then(res => res.json()).then(data => data)

      setCronogramas(res)
    }

    loadData()
  }, [])
  
  const  postCronogramas = async (e) => {
    e.preventDefault();
    const cronogramas = {
      privacidade: Boolean(privacidade),
      titulo: titulo_cronograma,
      aluno: 1
    }
    
    await fetch("http://localhost:8000/api/cronogramas/", {
      method:"POST",
      headers: {
        'Content-Type': 'application/json',
      },  
      body: JSON.stringify(cronogramas)
    }).then(res => res.json());
  }

  const  postTarefas = async (e) => {
    e.preventDefault();

    if(assunto === "") assunto = "none";

    const tarefas = {
      titulo: titulo,
      assunto: assunto,
      descricao: descricao,
      hora_inicio: horaOfc,
      data: dataOfc,
      status: false,
      cronograma: cronogramas.length,
    }
    console.log(tarefas)
    
    await fetch("http://localhost:8000/api/tarefas/", {
      method:"POST",
      headers: {
        'Content-Type': 'application/json',
      },  
      body: JSON.stringify(tarefas)
    }).then(res => res.json());
  }

  function handleClick (e) {
    const tabMenu = document.querySelectorAll('[data-tab="menu"] button')
    const tabContent = document.querySelectorAll('[data-tab="content"] form')
    if (tabMenu.length && tabContent.length) {
      function activeTab(index) {
        tabContent.forEach(section => {
          section.classList.remove('ativo')
        })
        tabContent[index].classList.add('ativo', tabContent[index].dataset.anime)
      }

      tabMenu.forEach((itemMenu, index) => {
        itemMenu.addEventListener('click', () => {
          activeTab(index)
        })
      })
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
        <button onClick={handleClick}>Informações</button >
        <button onClick={handleClick}>Aulas</button > 
        <button onClick={handleClick}>Matérias</button >
        <button onClick={handleClick}>Provas</button > 
        <button onClick={handleClick}>Afazeres</button >
        <button onClick={handleClick}>Horários Vagos</button >
      </div>

    <section id="criar-crono" data-tab="content">
      <form onSubmit={postCronogramas} className="crono-info" method="post">
        <label htmlFor="titulo">Insira o nome do seu cronograma: </label> <br/><br/>
        <input type="text" name="titulo" id="titulo_cronograma" onChange={(e) => setTituloCronograma(e.target.value)} value={titulo || ""} /> <br/>
        <div className="crono-priv"><br/>
          <input type="radio" name="priv" id="privado" onChange={(e) => setPrivado(e.target.value)} value={privacidade || true} />
          <label htmlFor="priv">Quero que seja privado</label>
        </div>
        <button className="btncont" type="submit">Salvar</button>
      </form>
    </section>

    <section id="criar-crono1" data-tab="content">
      <form onSubmit={postTarefas} className={`crono-info1`} method="post" >
        <div className="info">
          <label htmlFor="aulas">Informe a aula</label>
          <input type="text" name="aulas" id="titulo" onChange={(e) => setTitulo(e.target.value)} value={titulo || ""} />
        </div>
        <div className="info">
          <label htmlFor="descricao">Descrição</label>
          <input type="text" name="descricao" id="descricao" onChange={(e) => setDescricao(e.target.value)} value={descricao || ""}  />
        </div>
        <div className="info">
          <label htmlFor="horario">Horário</label> 
          <input type="time" name="horario" id="horario" onChange={(e) => setHora(e.target.value)} value={hora || ""} />
        </div>
        <div className="info">
          <label htmlFor="datas">Data</label> 
          <input type="datetime" name="datas" id="data" onChange={(e) => setData(e.target.value)} value={data || ""} />
        </div>
        <button className="btncont" type="submit">Salvar</button>
      </form>
    </section>

    <section id="criar-crono1" data-tab="content">
      <form onSubmit={postTarefas} className={`crono-info1`} method="post">
        <div className="info">
          <label htmlFor="aulas">Informe a matéria</label>
          <input type="text" name="aulas" id="titulo" onChange={(e) => setTitulo(e.target.value)} value={titulo || ""} />
        </div>
        <div className="info">
          <label htmlFor="descricao">Descrição</label>
          <input type="text" name="descricao" id="descricao" onChange={(e) => setDescricao(e.target.value)} value={descricao || ""} />
        </div>
        <div className="info">
          <label htmlFor="aulas">Assunto</label>
          <input type="text" name="aulas" id="assunto" onChange={(e) => setAssunto(e.target.value)} value={assunto || ""} />
        </div>
        <div className="info">
          <label htmlFor="horario">Horário</label> 
          <input type="time" name="horario" id="horario" onChange={(e) => setHora(e.target.value)} value={hora || ""} />
        </div>
        <div className="info">
          <label htmlFor="datas">Data</label> 
          <input type="datetime" name="datas" id="data" onChange={(e) => setData(e.target.value)} value={data || ""} />
        </div>
        <button className="btncont" type="submit">Salvar</button>
      </form>
    </section>

    <section id="criar-crono1" data-tab="content">
      <form onSubmit={postTarefas} className={`crono-info1`} method="post">
        <div className="info">
          <label htmlFor="aulas">Informe suas provas</label>
          <input type="text" name="aulas" id="titulo" onChange={(e) => setTitulo(e.target.value)} value={titulo || ""} />
        </div>
        <div className="info">
          <label htmlFor="descricao">Descrição</label>
          <input type="text" name="descricao" id="descricao" onChange={(e) => setDescricao(e.target.value)} value={descricao || ""} />
        </div>
        <div className="info">
          <label htmlFor="aulas">Assunto</label>
          <input type="text" name="aulas" id="assunto" onChange={(e) => setAssunto(e.target.value)} value={assunto || ""} />
        </div>
        <div className="info">
          <label htmlFor="horario">Horário</label> 
          <input type="time" name="horario" id="horario" onChange={(e) => setHora(e.target.value)} value={hora || ""} />
        </div>
        <div className="info">
          <label htmlFor="datas">Data</label> 
          <input type="datetime" name="datas" id="data" onChange={(e) => setData(e.target.value)} value={data || ""} />
        </div>
        <button className="btncont" type="submit">Salvar</button>
      </form>
    </section>

    <section id="criar-crono1" data-tab="content">
      <form onSubmit={postTarefas} className={`crono-info1`} method="post">
        <div className="info">
          <label htmlFor="aulas">Informe seu afazer</label>
          <input type="text" name="aulas" id="titulo" onChange={(e) => setTitulo(e.target.value)} value={titulo || ""} />
        </div>
        <div className="info">
          <label htmlFor="descricao">Descrição</label>
          <input type="text" name="descricao" id="descricao" onChange={(e) => setDescricao(e.target.value)} value={descricao || ""} />
        </div>
        <div className="info">
          <label htmlFor="horario">Horário</label> 
          <input type="time" name="horario" id="horario" onChange={(e) => setHora(e.target.value)} value={hora || ""} />
        </div>
        <div className="info">
          <label htmlFor="datas">Data</label> 
          <input type="datetime" name="datas" id="data" onChange={(e) => setData(e.target.value)} value={data || ""} />
        </div>
        <button className="btncont" type="submit">Salvar</button>
      </form>
    </section>

    <section id="criar-crono1" data-tab="content">
      <form onSubmit={postTarefas} className={`crono-info1`} method="post">
        <div className="info">
          <label htmlFor="aulas">Se desejar, insira descanso</label>
          <input type="text" name="aulas" id="titulo" onChange={(e) => setTitulo(e.target.value)} value={titulo || ""} />
        </div>
        <div className="info">
          <label htmlFor="descricao">Descrição</label>
          <input type="text" name="descricao" id="descricao" onChange={(e) => setDescricao(e.target.value)} value={descricao || ""} />
        </div>
        <div className="info">
          <label htmlFor="horario">Horário</label> 
          <input type="time" name="horario" id="horario" onChange={(e) => setHora(e.target.value)} value={hora || ""} />
        </div>
        <div className="info">
          <label htmlFor="datas">Data</label> 
          <input type="datetime" name="datas" id="data" onChange={(e) => setData(e.target.value)} value={data || ""} />
        </div>
        <button className="btncont" type="submit">Salvar</button>
      </form>
    </section>
  </div>
  )
}

export default CriarCrono;
