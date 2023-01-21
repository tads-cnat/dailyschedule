import React from 'react';
import { useEffect, useState } from 'react';
import Rotas from "./rotas";

function App(){
  const [cronogramas, setCronogramas] = useState([]);
  const [alerta, setAlerta] = useState([]);
  const [error, setError] = useState(null);

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

      const alerta = () => {
        fetch('http://localhost:8000/api/aluno/1/alerta')
          .then(response => response.json())
          .then(data => setAlerta(data))
      }
      setInterval(
      alerta()
      ,2400000)
    }, [])  

  return (
      <div className="App">                    
          <Rotas />
      </div>
  )
}

export default App;