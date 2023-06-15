/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React, { useRef } from 'react';
import { useEffect, useState } from "react";
import './MC.css';
import Sidebar from '../Navbar/Sidebar';
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { useReactToPrint } from 'react-to-print';
import CopyToClipboard from 'react-copy-to-clipboard';
import cronogramaImg from '../../assets/images/cronograma.png';
import { BsThreeDotsVertical } from 'react-icons/bs';
//BsThreeDotsVertical 


function MeusCrogramas(){
    const [cronogramas, setCronogramas] = useState([]);
    const [weather, setWeather] = useState([]);

    const id = localStorage.getItem('token');
    const navigate = useNavigate();
    const url = window.location.href

    

    useEffect(()=>{     
        if(id == null){
            navigate("/")
        }    
        const loadData = () => {
          fetch(`http://localhost:8000/api/cronogramas/?id=${id}`)
          .then(response => response.json())
          .then(data => setCronogramas(data))
        }
        loadData();
      }, [])  

      const componentRef = useRef();
      
      const handlePrint = useReactToPrint({
          content: () => componentRef.current,
          documentTitle: 'Nova Print',          
      });
      
      const alerta = () => {
        fetch('http://localhost:8000/api/aluno/1/alerta')
          .then(response => response.json())
          .then(data => setCronogramas(data))
      }
      
      const getWeather = () => {
        fetch('https://api.openweathermap.org/data/2.5/weather?id=3394023&appid=f7a00c0b8c73f7b91f13298460d8c6a7&lang=pt_br')
        .then(response => response.json())
        .then(data => setWeather(data))
        console.log("Console: "+ JSON.stringify(weather.weather))
      }
    return (
        <div className="MC">
            <Sidebar></Sidebar>
            {/*<nav className="nav-menu">                
                <ul className="lista-simples">
                
                <h3>DailySchedule</h3>
                <form action="." method="GET" className="forms">
                    <input className="forms" type="text"></input>
                </form>
                <br></br>
                    <li><a href="./MeusCroogramas.js" download>Baixar</a></li>
                    <li>Meu perfil</li>
                    <li>Criar cronograma</li>
                    <li>Meus cronogramas</li>
                    <li>Notificações</li>
                </ul>
    </nav>*/}
            <section className="content">
                <header className="header">
                    <h2 className="tittle">Meus Cronogramas</h2>                
                    
                </header>
                
                <section className="list-cards">
                    <div className="box-cards">
                        {cronogramas.map(cronograma=>(
                            // eslint-disable-next-line react/jsx-key
                            <div className="card" >
                                <div className="dropdown">
                                <button className="dropbtn option">
                                    <BsThreeDotsVertical></BsThreeDotsVertical>
                                </button>
                                    
                                    <div className="dropdown-content">                                          
                                        <Link to={`/Editar/${cronograma.id}`}>Editar</Link>                                            
                                        <Link to={`/Visualizar/${cronograma.id}`} onClick={handlePrint}>Exportar</Link>                                                                                
                                        <CopyToClipboard text={`localhost:3000/Visualizar/${cronograma.id}`}>
                                        <Link to="#">Compartilhar</Link>                                          
                                        </CopyToClipboard>                                      
                                        
                                    </div>
                                </div> 
                                <div>
                                    <a href={`/Visualizar/${cronograma.id}`}>
                                        <img src={cronogramaImg} className="img-icon" alt="Cronograma" />
                                    </a>
                                </div>
                                <p> {cronograma.titulo}</p>                                                                
                                
                            </div>                        
                        ))}              
                            
                    </div>                
                    
                </section>
            </section>
        </div>
    );
}

export default MeusCrogramas;