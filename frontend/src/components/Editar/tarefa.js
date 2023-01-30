import './style.css'
import { useState, useEffect, useRef } from "react";
import SideBar from '../Navbar/Sidebar';
import { BsFillTrashFill, BsPencilSquare, BsFillCloudSunFill } from "react-icons/bs";
import { useReactToPrint } from 'react-to-print';
import { redirect, useParams, useNavigate } from 'react-router-dom';

const Tarefa = () => {

    const id = localStorage.getItem('token')

    const navigate = useNavigate();
    const [weather, setWeather] = useState([]);
    const [previsao, setPrevisao] = useState([]);
    const [cronogramas, setCronogramas] = useState([]);
    const [tarefas, setTarefas] = useState([]);
    const [project, setProject] = useState([]);
    
    const [titulo_cronograma, setTituloCronograma] = useState("")
    const [privacidade, setPrivado] = useState(false)

    const [titulo_tarefa, setTituloTarefa] = useState([]);
    const [assunto_tarefa, setAssuntoTarefa] = useState([]);
    const [descricao_tarefa, setDescricaoTarefa] = useState([]);
    const [inicio_tarefa, setInicioTarefa] = useState([]);
    const [data_tarefa, setDataTarefa] = useState([]);
    const [status_tarefa, setStatusTarefa] = useState([]);
    
    var semana = ["Domingo", "Segunda-Feira", "Terça-Feira", "Quarta-Feira", "Quinta-Feira", "Sexta-Feira", "Sábado"]; 

    const params = useParams();
    const idCronograma = params.idCronograma;
    const idTarefa = params.idTarefa;

    useEffect(() => {  
        setPrevisao("Ver previsão de hoje");

        const loadTarefa = async(e) => {      
          fetch(`http://localhost:8000/api/tarefas/${idTarefa}`)
          .then(res => res.json())
          .then(data => setTarefas(data))
        }           
        loadTarefa();
        console.log("Tarefa recuperada: " + JSON.stringify(tarefas))    
      }, [])
    
      const handleDelete = async (id) => {
        await fetch( `http://localhost:8000/api/tarefas/${id}`, {
          method:"DELETE",
        })
        navigate(`/Editar/${idCronograma}`)
      }

    return (
        <div>
      <SideBar />
      <header className="header">        
        <h2>Editar Tarefa</h2>
        
          <div> 
            
              <form className="crono-crono" method="post">
                
                <div className="crono-priv-editar">
                    <div className='info'>
                        <label htmlFor="titulo_tarefa">Insira o nome de sua tarefa: </label><br />
                        <input  type="text" name="titulo" id="titulo" onChange={(e) => setTituloTarefa(e.target.value)} value={tarefas.titulo} />
                        <br />
                    </div>
                    <div className='info'>
                        <label htmlFor="assunto">Assunto:</label><br />
                        <input type="text" name="assunto" id="assunto" onChange={(e) => setAssuntoTarefa(e.target.value)} value={tarefas.assunto} />
                        <br />
                    </div>
                    <div className='info'>                        
                        <label htmlFor="descricao">Descrição</label><br />
                        <input type="text" name="descricao" id="descricao" onChange={(e) => setDescricaoTarefa(e.target.value)} value={tarefas.descricao} />
                        <br />
                    </div>
                    <div className='info'>                        
                        <div className='info'>
                        <label htmlFor="horario">Horário de inicio</label><br />
                        <input type="time" name="horario" id="horario" onChange={(e) => setInicioTarefa(e.target.value)} value={tarefas.hora_inicio} />
                        </div>
                        <br />
                    </div>
                    <div className='info'>                        
                        <label htmlFor="data">Data</label><br />
                        <input type="datetime" name="data" id="data" onChange={(e) => setDataTarefa(e.target.value)} value={tarefas.data} />
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