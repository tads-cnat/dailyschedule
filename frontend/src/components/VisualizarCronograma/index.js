import './style.css'
import SideBar from '../Navbar/Sidebar/index.js'
import { useState, useEffect } from "react";

const Visualizar = () => {
  const [cronogramas, setCronogramas] = useState([]);
  const [tarefas, setTarefas] = useState([]);
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
  
  return (
    <div>
      <SideBar />
      <header className="header">
        <h2>Meus cronogramas</h2>
        {cronogramas.map(crono => (
          <h3 key={crono.id}> {crono.titulo} </h3>
        ))}
      </header>

      <section className="visualizar">
        <table>

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
          <a href="/#">Baixar</a>
        </div>
      </section>
    </div>
  )
}

export default Visualizar;