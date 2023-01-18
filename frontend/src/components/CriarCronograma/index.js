import './style.css'
import { useState, useEffect } from "react";
import Sidebar from '../Navbar/Sidebar/index.js'

const CriarCrono = () => {

  const [titulo, setTitulo] = useState("")
  const [privacidade, setPrivado] = useState(false)
  const [cronograma, setCronogramas] = useState([])
  const [loading, setLoading] = useState(false)

  const  postCronogramas = async (e) => {
    e.preventDefault();
    const cronogramas = {
      privacidade: privacidade,
      titulo: titulo,
      aluno: 1
    }
    console.log(cronogramas)

    

    await fetch("http://localhost:8000/api/cronogramas/", {
      method:"POST",
      header: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': "*",
      },  
      body: JSON.stringify(cronogramas)
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
        <label htmlFor="titulo">Insira o nome do seu cronograma: </label>
        <input type="text" name="titulo" id="titulo" onChange={(e) => setTitulo(e.target.value)} value={titulo || ""} />
        <div className="crono-priv"><br/>
          <label htmlFor="priv">Quero que seja privado</label>
          <input type="radio" name="priv" id="privado" onChange={(e) => setPrivado(e.target.value)} value={privacidade || ""} />
        </div>
        <button className="btncont" type="submit">Salvar</button>
      </form>
    </section>

    <section id="criar-crono1" data-tab="content">
      <form onSubmit={postCronogramas} className={`crono-info1`} method="post" >
        <div className="info">
          <label htmlFor="aulas">Informe a aula</label>
          <input type="text" name="aulas" id="titulo" />
        </div>
        <div className="info">
          <label htmlFor="descricao">Descrição</label>
          <input type="text" name="descricao" id="descricao" />
        </div>
        <div className="info">
          <label htmlFor="horario">Horário</label> 
          <input type="time" name="horario" id="horario" />
        </div>
        <div className="info">
          <label htmlFor="datas">Data</label> 
          <input type="date" name="datas" id="data" />
        </div>
        <button className="btncont" type="submit">Salvar</button>
      </form>
    </section>

    <section id="criar-crono1" data-tab="content">
      <form onSubmit={postCronogramas} className={`crono-info1`} method="post">
        <div className="info">
          <label htmlFor="aulas">Informe a matéria</label>
          <input type="text" name="aulas" id="titulo" />
        </div>
        <div className="info">
          <label htmlFor="descricao">Descrição</label>
          <input type="text" name="descricao" id="descricao" />
        </div>
        <div className="info">
          <label htmlFor="aulas">Assunto</label>
          <input type="text" name="aulas" id="assunto" />
        </div>
        <div className="info">
          <label htmlFor="horario">Horário</label> 
          <input type="time" name="horario" id="horario" />
        </div>
        <div className="info">
          <label htmlFor="datas">Data</label> 
          <input type="date" name="datas" id="data" />
        </div>
        <button className="btncont" type="submit">Salvar</button>
      </form>
    </section>

    <section id="criar-crono1" data-tab="content">
      <form onSubmit={postCronogramas} className={`crono-info1`} method="post">
        <div className="info">
          <label htmlFor="aulas">Informe suas provas</label>
          <input type="text" name="aulas" id="titulo" />
        </div>
        <div className="info">
          <label htmlFor="descricao">Descrição</label>
          <input type="text" name="descricao" id="descricao" />
        </div>
        <div className="info">
          <label htmlFor="aulas">Assunto</label>
          <input type="text" name="aulas" id="assunto" />
        </div>
        <div className="info">
          <label htmlFor="horario">Horário</label> 
          <input type="time" name="horario" id="horario" />
        </div>
        <div className="info">
          <label htmlFor="datas">Data</label> 
          <input type="datetime-local" name="datas" id="data" />
        </div>
        <button className="btncont" type="submit">Salvar</button>
      </form>
    </section>

    <section id="criar-crono1" data-tab="content">
      <form onSubmit={postCronogramas} className={`crono-info1`} method="post">
        <div className="info">
          <label htmlFor="aulas">Informe seu afazer</label>
          <input type="text" name="aulas" id="titulo" />
        </div>
        <div className="info">
          <label htmlFor="descricao">Descrição</label>
          <input type="text" name="descricao" id="descricao" />
        </div>
        <div className="info">
          <label htmlFor="horario">Horário</label> 
          <input type="time" name="horario" id="horario" />
        </div>
        <div className="info">
          <label htmlFor="datas">Data</label> 
          <input type="date" name="datas" id="data" />
        </div>
        <button className="btncont" type="submit">Salvar</button>
      </form>
    </section>

    <section id="criar-crono1" data-tab="content">
      <form onSubmit={postCronogramas} className={`crono-info1`} method="post">
        <div className="info">
          <label htmlFor="aulas">Se desejar, insira descanso</label>
          <input type="text" name="aulas" id="titulo" />
        </div>
        <div className="info">
          <label htmlFor="descricao">Descrição</label>
          <input type="text" name="descricao" id="descricao" />
        </div>
        <div className="info">
          <label htmlFor="horario">Horário</label> 
          <input type="time" name="horario" id="horario" />
        </div>
        <div className="info">
          <label htmlFor="datas">Data</label> 
          <input type="date" name="datas" id="data" />
        </div>
        <button className="btncont" type="submit">Salvar</button>
      </form>
    </section>
  </div>
  )
}

export default CriarCrono;
