/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import '../style.css'
import { useState, useEffect } from "react";
import SideBar from '../Navbar/Sidebar';
import { BsFillTrashFill, BsPencilSquare } from "react-icons/bs";
import { useParams, useNavigate } from 'react-router-dom';

const Tarefa = () => {

    const id = localStorage.getItem('token')

    const navigate = useNavigate();
    const [previsao, setPrevisao] = useState([]);
    const [tarefas, setTarefas] = useState([]);
    const [project, setProject] = useState([]);

    const [titulo_tarefa, setTituloTarefa] = useState([]);
    const [assunto_tarefa, setAssuntoTarefa] = useState([]);
    const [descricao_tarefa, setDescricaoTarefa] = useState([]);
    const [inicio_tarefa, setInicioTarefa] = useState('');
    const [data_tarefa, setDataTarefa] = useState('');
    const [status_tarefa, setStatusTarefa] = useState([]);

    const params = useParams();
    const idCronograma = params.idCronograma;
    const idTarefa = params.idTarefa;
    let [assunto, setAssunto] = useState("")

    const data1 = data_tarefa.split('/')
    const hora1 = inicio_tarefa.split(':')
    const dataOfc = new Date(data1[2], data1[1]-1, data1[0], hora1[0], hora1[1])
    const horaOfc = dataOfc.getHours() + ":" + dataOfc.getMinutes()

    useEffect(() => {  
        setPrevisao("Ver previsão de hoje");

        const loadTarefa = async(e) => {      
          fetch(`http://localhost:8000/api/tarefas/${idTarefa}/`)
          .then(res => res.json())
          .then(data => setTarefas(data))
        }           
        loadTarefa();
        console.log("Tarefa recuperada: " + JSON.stringify(tarefas))    
      }, [])
    
      const handleDelete = async (id) => {
        await fetch( `http://localhost:8000/api/tarefas/${id}/`, {
          method:"DELETE",
        })
        navigate(`/Editar/${idCronograma}`)
      }

      const  postTarefas = async (e) => {
        e.preventDefault();
    
        if(assunto === "") assunto = "none";
    
        const tarefas = {
          titulo: titulo_tarefa,
          assunto: assunto_tarefa,
          descricao: descricao_tarefa,
          hora_inicio: horaOfc,
          data: dataOfc,
          status: false,
          cronograma: 1,
        }
        console.log(tarefas)
        await fetch(`http://localhost:8000/api/tarefas/${idTarefa}/`, {
          method:"PUT",
          headers: {
            'Content-Type': 'application/json',
          },  
          body: JSON.stringify(tarefas)
        }).then(res => res.json());
        alert("Tarefa Cadastrada!")
      }

    return (
        <div>
      <SideBar />
      <header className="header">        
        <h2>Editar Tarefa</h2>
        
          <div> 
            
              <form onSubmit={postTarefas} className="crono-crono" method="post">
                
                <div className="crono-priv-editar">
                    <div className='info'>
                        <label htmlFor="titulo_tarefa">Insira o nome de sua tarefa: </label><br />
                        <input  type="text" name="titulo" id="titulo" onChange={(e) => setTituloTarefa(e.target.value)} value={titulo_tarefa || tarefas.titulo} />
                        <br />
                    </div>
                    <div className='info'>
                        <label htmlFor="assunto">Assunto:</label><br />
                        <input type="text" name="assunto" id="assunto" onChange={(e) => setAssuntoTarefa(e.target.value)} value={assunto_tarefa || tarefas.assunto} />
                        <br />
                    </div>
                    <div className='info'>                        
                        <label htmlFor="descricao">Descrição</label><br />
                        <input type="text" name="descricao" id="descricao" onChange={(e) => setDescricaoTarefa(e.target.value)} value={descricao_tarefa || tarefas.descricao} />
                        <br />
                    </div>
                    <div className='info'>                        
                        <div className='info'>
                        <label htmlFor="horario">Horário de inicio</label><br />
                        <input type="time" name="horario" id="horario" onChange={(e) => setInicioTarefa(e.target.value)} value={inicio_tarefa} />
                        </div>
                        <br />
                    </div>
                    <div className='info'>                        
                        <label htmlFor="data">Data</label><br />
                        <input type="datetime" name="data" id="data" onChange={(e) => setDataTarefa(e.target.value)} value={data_tarefa} />
                        <br />
                    </div>
                    <div className='info'>                        
                        <input type="checkbox" name="priv" id="privado" onChange={(e) => setStatusTarefa(e.target.value)} checked={status_tarefa || tarefas.status} />
                        <label htmlFor="priv">Quero que seja privado</label>
                        <br />
                    </div>
                </div>
                <div className='info'>    
                    <button className="crono-send-editar" type="submit">Salvar alterações</button>
                </div>
              </form>
            
            
            <BsFillTrashFill className='trash' onClick={() => handleDelete(tarefas.id)} />
            
            <BsPencilSquare className='pencil' onClick={() => console.log(tarefas)}/>
            
            
          </div>
        
      </header>
      

      <section className="editar_visualizar">
                     
      </section>
    </div>
    )
}

export default Tarefa;