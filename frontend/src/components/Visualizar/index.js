import './style.css'
import SideBar from '../Navbar/Sidebar/index.js'
import CriarCrono from '../CriarCronograma/index.js'
import { useState, useEffect, useId } from "react";
import { BsFillTrashFill, BsPencilSquare } from "react-icons/bs";
import { useReactToPrint } from 'react-to-print';
import { useRef } from 'react';
import { redirect, useParams, useNavigate } from 'react-router-dom';

const VisualizarC = (projectData) => {
  const id = localStorage.getItem('token')

  const navigate = useNavigate();
  const [cronogramas, setCronogramas] = useState([]);
  const [tarefas, setTarefas] = useState([]);
  const [project, setProject] = useState(projectData || []);
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

  
  return (
    <div>
      <SideBar />
      <header className="header">
        <h2>Meus cronogramas</h2>
        
          <div>
            <h3> {cronogramas.titulo} </h3>
            <BsFillTrashFill className='trash' onClick={() => handleDelete(cronogramas.id)} />
            <a href={`/cronograma/${cronogramas.id}`}><BsPencilSquare className='pencil'/></a>
            
          </div>
        
      </header>
      

      <section className="visualizar">
        <table ref={componentRef}>

          <thead>
            <tr>
              <th className="horarios" > Data </th>
              <th className="horarios">Horário</th>
              <th className="tarefas">Tarefa</th>
            </tr>
          </thead>

          <tbody>
            {tarefas.map(tarefa => (
              <tr>
                <td className="tbHora" >{semana[new Date (tarefa.data).getDay()]}</td>
                <td className="tbHora" >{(tarefa.hora_inicio).slice(0, -3)}</td>
                <td className="tbTitulo"  >{tarefa.titulo} - {tarefa.descricao} </td>
                
              </tr>
            ))}
          </tbody>

        </table>

        <div className="optbtn">
          <a href="/">Compartilhar</a>
          <a id="Hab" href="/">Editar</a>
          <a href="#" onClick={handlePrint}>Baixar</a>
        </div>
      </section>
    </div>
  )

}

export default VisualizarC;