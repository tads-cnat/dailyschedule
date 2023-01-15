import React from 'react';
import { useEffect, useState } from 'react';
import './App.css';

function App(){
  const [cronogramas, setCronogramas] = useState([]);
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
    }, [])  

  return (
      <div className="App">
          <header className="App-header">
              <h2>Meus Cronogramas</h2>
              <div style={{display:'flex'}}>
                  {cronogramas.map(cronograma=>(
                      <div key={cronograma.id}>{cronograma}</div>
                  ))}
              </div>
          </header>
      </div>
  )
}

export default App;