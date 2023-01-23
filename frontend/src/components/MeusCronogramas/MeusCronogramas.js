import React, { useRef } from 'react';
import { useEffect, useState } from "react";
import './MC.css';
import Editar from "../Editar/Editar";
import Sidebar from '../Navbar/Sidebar';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import { useReactToPrint } from 'react-to-print';


function MeusCrogramas(){
    const [cronogramas, setCronogramas] = useState([]);
    const id = localStorage.getItem('token')

    useEffect(()=>{
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
                            <div className="card" >
                                <div className="dropdown">
                                    <button className="dropbtn option">...</button>
                                    
                                    <div className="dropdown-content">                                          
                                        <Link to={`/Editar/${cronograma.id}`}>Editar</Link>                                            
                                        <Link to={`/Cronograma`} onClick={handlePrint}>Exportar</Link>                                                                                
                                        <Link to="/">Compartilhar</Link>                                        
                                        
                                    </div>
                                </div> 
                                <div>
                                    <a href={`/Cronograma`}>
                                        <img className="img-icon" src="https://th.bing.com/th/id/OIP.gxHUqJpeu1HZBzrHPlaB-QHaHa?pid=ImgDet&rs=1" />
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