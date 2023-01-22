import './style.css'
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Sidebar from '../Navbar/Sidebar/index.js'

const Editar = () => {

  const {id} = useParams()
  
  const [cronogramas, setCronogramas] = useState([])
  const [tarefas, setTarefas] = useState([])
  const [showProjectsForm, setshowProjectsForm] = useState(false)

  const [titulo, setTitulo] = useState("")
  let [assunto, setAssunto] = useState("")
  const [descricao, setDescricao] = useState("")
  const [hora, setHora] = useState("")
  const [data, setData] = useState("")


  useEffect(() => {
      fetch( `http://127.0.0.1:8000/api/tarefas/${id}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        },
      })
      .then(res => res.json())
      .then(data => setTarefas(data))
  }, [id])

  function toggleCronoForm() {
    setshowProjectsForm(!showProjectsForm)
  }

  

  const editTarefas = async (e) => {
    e.preventDefault();
    console.log(tarefas)
      await fetch(`http://localhost:8000/api/tarefas/${tarefas.id}`, {
        method:"PUT",
        headers: {
          'Content-Type': 'application/json',
        },  
        body: JSON.stringify(tarefas)
      })
      .then(res => res.json())
      .then(data => setTarefas(data))
      
  }

  
  return (
    <div>
      <header className="header">
        <h2>Editar cronograma</h2>
        <p>
          Edite as informações do cronograma <strong>{cronogramas.titulo}</strong>!
        </p>
      </header>

      <p>{tarefas.titulo}</p>

      <form onSubmit={editTarefas} className={`crono-info1`} method="post" >
        <div className="info">
          <label htmlFor="aulas">Informe a aula</label>
          <input type="text" name="aulas" id="titulo" />
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
      </div>
  )
}

export default Editar;
