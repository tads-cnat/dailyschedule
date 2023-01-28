import React from 'react';
import { useEffect, useState } from 'react';
import Rotas from "./rotas";
import  { Redirect, useHistory } from 'react-router-dom'

function App(){
  const [cronogramas, setCronogramas] = useState([]);
  const [alerta, setAlerta] = useState([]);
  const [error, setError] = useState(null);

  const id = localStorage.getItem('token');
  

  console.log("ID do usuário: " + id);

  useEffect(()=>{
      const loadData = () => {
        fetch('http://localhost:8000/api/cronogramas/',{
          method:'GET',
          headers: {'Content-Type':'application/json'}
        })
        .then(response => response.json())
        .then(data => setCronogramas(data))
        .catch(error =>{
          console.error("Error fetching: ", error);
          setError(error)
        })
      }
      //loadData();
      const id = localStorage.getItem('token')
      const alerta = () => {
        fetch(`http://localhost:8000/api/aluno/${id}/alerta`)
          .then(response => response.json())
          .then(data => setAlerta(data))
      }
      //setInterval(
      //alerta()
      //,2400000)
      
    }, [])  

    function redir(valor){
      if(valor == null){
        //return history.push('/Welcome')
      }  
    }
    
  
  

  return (
      <div className="App">                    
          <Rotas />
      </div>
  )
}

export default App;