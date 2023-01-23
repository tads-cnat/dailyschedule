import './style.css'
import SideBar from '../Navbar/Sidebar/index.js'
import CriarCrono from '../CriarCronograma/index.js'
import { useState, useEffect } from "react";
import { BsFillTrashFill, BsPencilSquare } from "react-icons/bs";
import { useReactToPrint } from 'react-to-print';
import { useRef } from 'react';

const Visualizar = (projectData) => {
  const [cronogramas, setCronogramas] = useState([]);
  const [tarefas, setTarefas] = useState([]);
  const [project, setProject] = useState(projectData || []);
  var semana = ["Domingo", "Segunda-Feira", "Terça-Feira", "Quarta-Feira", "Quinta-Feira", "Sexta-Feira", "Sábado"];

  useEffect(() => {
    const loadData = async(e) => {
      const crono = await fetch("http://127.0.0.1:8000/api/cronogramas/")
      .then(crono => crono.json())
      .then(data => data)
      setCronogramas(crono)
      
      const res = await fetch("http://127.0.0.1:8000/api/tarefas/")
      .then(res => res.json())
      .then(data => data)
      setTarefas(res)
    }

    loadData()
  }, [])

  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: 'Nova Print',          
    });

  const handleDelete = async (id) => {
    await fetch( `http://localhost:8000/api/cronogramas/${id}`, {
      method:"DELETE",
    })
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
        {cronogramas.map(crono => (
          <div key={crono.id} >
            <h3 > {crono.titulo} </h3>
            <BsFillTrashFill className='trash' onClick={() => handleDelete(crono.id)} />
            <a href={`/cronograma/${crono.id}`}><BsPencilSquare className='pencil'/></a>
            
          </div>
        ))}
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
              <tr key={tarefa.id}>
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

export default Visualizar;