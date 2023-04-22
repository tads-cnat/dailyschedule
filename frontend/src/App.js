import React from 'react';
import { useEffect, useState } from 'react';
import './App.css';
import SearchBar from './/components/./SearchBar';

/*function App() {
  const [customers, setCustomers] = useState([]);


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
      setInterval(
      alerta()
      ,2400000)
      
    }, [])  

    function redir(valor){
      if(valor == null){
        //return history.push('/Welcome')
      }  
    }
    
  
  

  return (
    <div className="App">
      <header className="App-header">
        ihgkhuhiuhiuh
        {customers.map(aluno =>(
          <h2 key={aluno.id}>{aluno.nome}</h2>
        ))}
      </header>
    </div>
  );
}

export default App;
*/

function App() {
  return (
    <div>
      <SearchBar />
    </div>
  );
}
export default App;