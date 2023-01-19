import React from "react";
import { useEffect, useState } from "react";
import './MC.css';
import Editar from "./Editar";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";


function MeusCrogramas(){
    const [cronogramas, setCronogramas] = useState([]);

    useEffect(()=>{
        const loadData = () => {
          fetch('http://localhost:8000/api/cronogramas/')
          .then(response => response.json())
          .then(data => setCronogramas(data))
        }
        loadData();
      }, [])  

    return (
        <div className="App">
            <nav className="nav-menu">                
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
            </nav>
            <section className="content">
                <header className="App-header">
                    <h2 className="tittle">Meus Cronogramas</h2>                
                    
                </header>
                <section className="list-cards">
                    <div className="box-cards">
                        {cronogramas.map(cronograma=>(
                            <div className="card">
                                <div className="dropdown">
                                    <button className="dropbtn option">...</button>
                                    
                                    <div className="dropdown-content">  
                                        {/*
                                        <Link to="/Editar">Editar</Link>                                            
                                        <Link to="/">Exportar</Link>
                                        <Link to="/">Compartilhar</Link>                                        
                                         */}
                                    </div>
                                </div> 
                                <div>
                                    <img className="img-icon" src="https://th.bing.com/th/id/OIP.v6NL4qLcI5FSZJRvCN2iugHaFl?pid=ImgDet&rs=1" />
                                </div>
                                <p> {cronograma.titulo}</p>
                            </div>                        
                        ))}


                        <div className="card">
                            <div className="dropdown">                                
                                <button className="dropbtn option">...</button>
                                <div className="dropdown-content">
                                    <a href="#">Editar</a>
                                    <a href="#">Exportar</a>
                                    <a href="#">Compartilhar</a>
                                </div>
                            </div> 
                            <div>
                                <img className="img-icon" src="https://th.bing.com/th/id/OIP.v6NL4qLcI5FSZJRvCN2iugHaFl?pid=ImgDet&rs=1" />
                            </div>
                            <p>card 2</p>
                        </div>

                        <div className="card"> 
                            <div className="dropdown">
                                <button className="dropbtn option">...</button>
                                <div className="dropdown-content">
                                    <a href="#">Editar</a>
                                    <a href="#">Exportar</a>
                                    <a href="#">Compartilhar</a>
                                </div>
                            </div> 
                            <div>
                                <img className="img-icon" src="https://th.bing.com/th/id/OIP.v6NL4qLcI5FSZJRvCN2iugHaFl?pid=ImgDet&rs=1" />
                            </div>
                            <p>card 3</p>
                        </div>                       
                        <div className="card"> 
                            <div className="dropdown">
                                <button className="dropbtn option">...</button>
                                <div className="dropdown-content">
                                    <a href="#">Editar</a>
                                    <a href="#">Exportar</a>
                                    <a href="#">Compartilhar</a>
                                </div>
                            </div> 
                            <div>
                                <img className="img-icon" src="https://th.bing.com/th/id/OIP.v6NL4qLcI5FSZJRvCN2iugHaFl?pid=ImgDet&rs=1" />
                            </div>
                            <p>card 3</p>
                        </div>                       
                        <div className="card"> 
                            <div className="dropdown">
                                <button className="dropbtn option">...</button>
                                <div className="dropdown-content">
                                    <a href="#">Editar</a>
                                    <a href="#">Exportar</a>
                                    <a href="#">Compartilhar</a>
                                </div>
                            </div> 
                            <div>
                                <img className="img-icon" src="https://th.bing.com/th/id/OIP.v6NL4qLcI5FSZJRvCN2iugHaFl?pid=ImgDet&rs=1" />
                            </div>
                            <p>card 3</p>
                        </div>                       
                        <div className="card"> 
                            <div className="dropdown">
                                <button className="dropbtn option">...</button>
                                <div className="dropdown-content">
                                    <a href="#">Editar</a>
                                    <a href="#">Exportar</a>
                                    <a href="#">Compartilhar</a>
                                </div>
                            </div> 
                            <div>
                                <img className="img-icon" src="https://th.bing.com/th/id/OIP.v6NL4qLcI5FSZJRvCN2iugHaFl?pid=ImgDet&rs=1" />
                            </div>
                            <p>card 3</p>
                        </div>                       
                        <div className="card"> 
                            <div className="dropdown">
                                <button className="dropbtn option">...</button>
                                <div className="dropdown-content">
                                    <a href="#">Editar</a>
                                    <a href="#">Exportar</a>
                                    <a href="#">Compartilhar</a>
                                </div>
                            </div> 
                            <div>
                                <img className="img-icon" src="https://th.bing.com/th/id/OIP.v6NL4qLcI5FSZJRvCN2iugHaFl?pid=ImgDet&rs=1" />
                            </div>
                            <p>card 3</p>
                        </div>                       
                        <div className="card"> 
                            <div className="dropdown">
                                <button className="dropbtn option">...</button>
                                <div className="dropdown-content">
                                    <a href="#">Editar</a>
                                    <a href="#">Exportar</a>
                                    <a href="#">Compartilhar</a>
                                </div>
                            </div> 
                            <div>
                                <img className="img-icon" src="https://th.bing.com/th/id/OIP.v6NL4qLcI5FSZJRvCN2iugHaFl?pid=ImgDet&rs=1" />
                            </div>
                            <p>card 3</p>
                        </div>                       
                        <div className="card"> 
                            <div className="dropdown">
                                <button className="dropbtn option">...</button>
                                <div className="dropdown-content">
                                    <a href="#">Editar</a>
                                    <a href="#">Exportar</a>
                                    <a href="#">Compartilhar</a>
                                </div>
                            </div> 
                            <div>
                                <img className="img-icon" src="https://th.bing.com/th/id/OIP.v6NL4qLcI5FSZJRvCN2iugHaFl?pid=ImgDet&rs=1" />
                            </div>
                            <p>card 3</p>
                        </div>                       
                        <div className="card"> 
                            <div className="dropdown">
                                <button className="dropbtn option">...</button>
                                <div className="dropdown-content">
                                    <a href="#">Editar</a>
                                    <a href="#">Exportar</a>
                                    <a href="#">Compartilhar</a>
                                </div>
                            </div> 
                            <div>
                                <img className="img-icon" src="https://th.bing.com/th/id/OIP.v6NL4qLcI5FSZJRvCN2iugHaFl?pid=ImgDet&rs=1" />
                            </div>
                            <p>card 3</p>
                        </div>                       
                        <div className="card"> 
                            <div className="dropdown">
                                <button className="dropbtn option">...</button>
                                <div className="dropdown-content">
                                    <a href="#">Editar</a>
                                    <a href="#">Exportar</a>
                                    <a href="#">Compartilhar</a>
                                </div>
                            </div> 
                            <div>
                                <img className="img-icon" src="https://th.bing.com/th/id/OIP.v6NL4qLcI5FSZJRvCN2iugHaFl?pid=ImgDet&rs=1" />
                            </div>
                            <p>card 3</p>
                        </div>                       
                            
                    </div>                
                    
                </section>
            </section>
        </div>
    );
}

export default MeusCrogramas;