import React, { useRef } from 'react';
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link, redirect } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { useReactToPrint } from 'react-to-print';


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
              DEPRESSÃO
        </div>
    )
}

export default Perfil;