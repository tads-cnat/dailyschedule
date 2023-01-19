import React from 'react';
import { useEffect, useState } from 'react';
import './App.css';
import SearchBar from './/components/./SearchBar';

/*function App() {
  const [customers, setCustomers] = useState([]);

  useEffect(()=>{
    const loadData = () => {
      fetch('http://localhost:8000/api/alunos/')
      .then(response => response.json())
      .then(data => setCustomers(data))
    }
    loadData();
  }, [])  

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