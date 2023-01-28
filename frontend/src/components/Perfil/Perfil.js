import React, { useRef } from 'react';
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link, redirect } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { useReactToPrint } from 'react-to-print';
import Sidebar from '../Navbar/Sidebar';
import './style.css'
import profile from '../Perfil/profile.png'

function Perfil(){
    const id = localStorage.getItem('token');
    const [aluno, setAluno] = useState([]);
    const navigate = useNavigate();

    useEffect(()=>{     
        if(id == null){
            navigate("/")
        }   
        const loadData = () => {
          fetch(`http://localhost:8000/api/alunos/?id=${id}`)
          .then(response => response.json())
          .then(data => setAluno(data))
        }
        loadData();
      }, [])
      
      return (
        <div>
            <Sidebar></Sidebar>
            <header className="perfilHder">
                    <h2 className="tittle">Perfil</h2>
            </header>

            <section className="perfil">
            
                {aluno.map(nome=>(
                    

                    <div key={nome.id} > 
                    
                    <img className="picture" src={profile} alt="profile"/> <br/>

                    Nome: {nome.first_name} {nome.last_name} <br/>

                    <div>
                        Email: {nome.email} 
                    </div>
                    <div>
                        Usuário: {nome.username}
                    </div>

                    </div>
                  
                ))}
            </section>
        </div>
    )
}

export default Perfil;