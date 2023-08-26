import React, { useState } from 'react';
import axios from 'axios';
// import './App.css';

function App() {
  const [streetName, setStreetName] = useState('');
  const [addresses, setAddresses] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSearch = async () => {
    try {
      const response = await axios.get(`https://nominatim.openstreetmap.org/search?q=${streetName}&format=json&addressdetails=1`);
      
      if (response.status === 200) {
        setAddresses(response.data);
        setErrorMessage('');
      } else {
        setAddresses([]);
        setErrorMessage('Erro ao buscar endereços');
      }
    } catch (error) {
      console.error('Erro ao buscar endereços:', error);
      setErrorMessage('Erro ao buscar endereços');
    }
  }; 



  
  return (
    <div className="App">
      <h1>Busca de Endereço por Nome de Rua</h1>
      <input
        type="text"
        placeholder="Digite o nome da rua"
        value={streetName}
        onChange={(e) => setStreetName(e.target.value)}
      />
      <button onClick={handleSearch}>Buscar Endereços</button>
      {errorMessage && <p>{errorMessage}</p>}
      {addresses.length > 0 && (
        <div>
          <h2>Resultados:</h2>
          <ul>
            {addresses.map((address, index) => (
              <li key={index}>
                <p>Rua: {address.address.road}</p>
                <p>Bairro: {address.address.suburb}</p>
                <p>CEP: {address.address.postcode}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;
