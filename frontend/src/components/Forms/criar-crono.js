/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import './style.css'
import { useState, useEffect } from "react";
import Sidebar from '../Navbar/Sidebar/index.js'
import { useNavigate } from 'react-router-dom';

const FormCriarCrono = () => {

  function handleClick (_e) {
    const tabMenu = document.querySelectorAll('[data-tab="menu"] button')
    const tabContent = document.querySelectorAll('[data-tab="content"] form')
      if (tabMenu.length && tabContent.length) {

      activeTab(index);

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
      <section id="criar-crono" data-tab="content">
        <form onSubmit={postCronogramas} className="crono-info" method="post">
            <label htmlFor="titulo">Insira o nome do seu cronograma: </label> <br/><br/>
            <input type="text" name="titulo" id="titulo_cronograma" onChange={(e) => setTituloCronograma(e.target.value)} value={titulo_cronograma || ""} /> <br/>
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
