import React, { useState } from 'react';

function SearchBar() {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);
  
    async function handleSubmit(e) {       
        e.preventDefault();
        const response = await fetch(`http://localhost:8000/api/cronogramas/search?q=${searchTerm}`,{
        headers: {
            Authorization: 'Bearer 71d0561f146ed5d1165fcde4a408d2e8ef5cd767'
        }
        })
        .then(response => response.json())
        .then(data => setSearchResults(data));
    }
  
    return (
      <>
        <form onSubmit={handleSubmit}>
          <input 
            type="text" 
            placeholder="Search..." 
            value={searchTerm} 
            onChange={e => setSearchTerm(e.target.value)}
          />
          <button type="submit">Search</button>
        </form>
        <div>
          {searchResults.map((result, index) => (
            <div key={index}>
              {result.titulo}
            </div>
          ))}
        </div>
      </>
    );
  }

  export default SearchBar;