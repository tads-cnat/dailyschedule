/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import './style.css'
import SideBar from '../Navbar/Sidebar/index.js'
import { useState, useEffect } from "react";
import { BsFillTrashFill, BsPencilSquare, BsFillCloudSunFill } from "react-icons/bs";
import { useReactToPrint } from 'react-to-print';
import { useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const Visualizar = (projectData) => {
  const id = localStorage.getItem('token')

  const navigate = useNavigate();
  const [weather, setWeather] = useState([]);
  const [previsao, setPrevisao] = useState([]);
  const [cronogramas, setCronogramas] = useState([]);
  const [tarefas, setTarefas] = useState([]);
  const [project, setProject] = useState(projectData || []);
  const [status_tarefa, setStatusTarefa] = useState([]);
  var semana = ["Domingo", "Segunda-Feira", "Terça-Feira", "Quarta-Feira", "Quinta-Feira", "Sexta-Feira", "Sábado"]; 

  const params = useParams();
  const ID = params.id;

  console.log("ID do cornograma: " + ID);

  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: 'Nova Print',          
    });

  useEffect(() => {  
    setPrevisao("Ver previsão de hoje");
    const loadData = async(e) => {
      fetch(`http://localhost:8000/api/cronogramas/${ID}`)
      .then(crono => crono.json())
      .then(data => setCronogramas(data))
    } 
    const loadTarefas = async(e) => {      
      fetch(`http://localhost:8000/api/cronogramas/${ID}/tarefas`)
      .then(res => res.json())
      .then(data => setTarefas(data))
    }   
    loadData();
    loadTarefas();
    console.log("Id do cronograma crono: " + cronogramas.id)    
  }, [ID])

  const handleDelete = async (id) => {
    await fetch( `http://localhost:8000/api/cronogramas/${id}`, {
      method:"DELETE",
    })
    navigate("/MeusCronogramas")
  }

  const handlePut = async (tarefas) => {
    await fetch(`http://localhost:8000/api/tarefas/${tarefas.id}`, {
      method:"PUT",
      headers: {
        'Content-Type': 'application/json',
      },  
      body: JSON.stringify(tarefas)
    })
    
  } 
  
  const getWeather = () => {
    fetch('https://api.openweathermap.org/data/2.5/weather?id=3394023&appid=f7a00c0b8c73f7b91f13298460d8c6a7&lang=pt_br')
    .then(response => response.json())
    .then(data => setWeather(data))
    setPrevisao(weather.weather[0].description)
    console.log("Tempo: "+ JSON.stringify(weather.weather))
  }

  const tarefaUpdate = (e) => {
    setStatusTarefa(e.target.value)
    console.log(status_tarefa)

  }
  
  return (
    <div>
      <SideBar />
      <header className="header">        
        <h2>Meus cronogramas</h2>
        
          <div>
            <h3> {cronogramas.titulo} </h3>
            <BsFillCloudSunFill onClick={() => getWeather()} className='cloud' /> {previsao}
            <BsFillTrashFill className='trash' onClick={() => handleDelete(cronogramas.id)} />
            <a href={`/Editar/${cronogramas.id}`}><BsPencilSquare className='pencil'/></a>
            
          </div>
        
      </header>
      

      <section className="visualizar">
        <table ref={componentRef}>

          <thead>
            <tr>
              <th className="horarios">Feito</th>
              <th className="horarios" > Data </th>
              <th className="horarios">Horário</th>
              <th className="tarefas">Tarefa</th>
            </tr>
          </thead>

          <tbody>
            {tarefas.map(tarefa => (
              // eslint-disable-next-line react/jsx-key
              <tr>
                <td className="tbHora" ><input type="checkbox" class="checkbox" onChange={(e) => tarefaUpdate(e)} /></td>
                <td className="tbHora" >{semana[new Date (tarefa.data).getDay()]}</td>
                <td className="tbHora" >{(tarefa.hora_inicio).slice(0, -3)}</td>
                <td className="tbTitulo"  >{tarefa.titulo} - {tarefa.descricao} </td>
                
              </tr>
            ))}
          </tbody>

        </table>

        <div className="optbtn">
          <a href="/">Compartilhar</a>
          <a href="#" onClick={handlePrint}>Baixar</a>
        </div>              
      </section>
    </div>
  )

}

export default Visualizar;