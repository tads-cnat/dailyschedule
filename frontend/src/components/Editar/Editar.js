/* eslint-disable no-undef */
import './style.css'
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Sidebar from '../Navbar/Sidebar/index.js'

const Editar = () => {

  const {id} = useParams()
  
  const [cronogramas, setCronogramas] = useState([])

  const [titulo_cronograma, setTituloCronograma] = useState("")
  const [privacidade, setPrivado] = useState(false)


  useEffect(() => {
      fetch( `http://127.0.0.1:8000/api/cronogramas/${id}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        },
      })
      .then(res => res.json())
      .then(data => setCronogramas(data))
  }, [id])

  const  postCronogramas = async (e) => {
    e.preventDefault();
    const cronograma = {
      privacidade: Boolean(privacidade),
      titulo: titulo_cronograma,
      aluno: 1
    }
    
    await fetch(`http://localhost:8000/api/cronogramas/${cronogramas.id}`, {
      method:"PUT",
      headers: {
        'Content-Type': 'application/json',
      },  
      body: JSON.stringify(cronograma)
    }).then(res => res.json());
  }

  function activeTab(index) {
    tabContent.forEach(section => {
      section.classList.remove('ativo')
    })
    tabContent[index].classList.add('ativo', tabContent[index].dataset.anime)
  }

  function handleClick (e) {
    const tabMenu = document.querySelectorAll('[data-tab="menu"] button')
    const tabContent = document.querySelectorAll('[data-tab="content"] form')
    if (tabMenu.length && tabContent.length) {

      activeTab(index)

      tabMenu.forEach((itemMenu, index) => {
        itemMenu.addEventListener('click', () => {
          activeTab(index)
        })
      })
    }
  }
  
  return (
    <div>
      <header className="header">
        <h2>Editar cronograma</h2>
        <p>
          Edite as informações do cronograma <strong>{cronogramas.titulo}</strong>!
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
        <input type="text" name="titulo" id="titulo_cronograma" onChange={(e) => setTituloCronograma(e.target.value)} value={titulo_cronograma || ""} /> <br/>
        <div className="crono-priv"><br/>
          <input type="radio" name="priv" id="privado" onChange={(e) => setPrivado(e.target.value)} value={privacidade || true} />
          <label htmlFor="priv">Quero que seja privado</label>
        </div>
        <button type="submit" className='btn'>Salvar</button>
      </form>
    </section>
      </div>
  )
}

export default Editar;
