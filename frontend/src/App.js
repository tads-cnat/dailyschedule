import React from 'react';
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Editar from './pages/Editar';
import MeusCrogramas from './pages/MeusCronogramas';


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
          
            <Router>                           
                <Routes>
                    <Route path="/" element={<MeusCrogramas />}> </Route>
                    <Route path="/Editar" element={<Editar />}> </Route>
                    {/*
                    <Route path="/" element={<Exportar />} />
                    <Route path="/" element={<Compartilhar />} />
                     */}
                </Routes>
            </Router>
          
      </div>
  )
}

export default App;