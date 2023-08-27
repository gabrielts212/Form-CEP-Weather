import React, { useState } from 'react';
import axios from 'axios';
// import './App.css';

function searchcep() {
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
    <div  className="w-full h-100% px-4 py-2  focus:outline-none focus:ring focus:border-blue-300 mt-10 min-h-screen bg-[rgb(27,27,27)]">
      <h1  className="text-2xl font-bold mb-4 font-bold ">Digite um Endereço</h1>
     <input
  type="text"
  placeholder="Digite o nome da Rua"
  value={streetName}
  onChange={(e) => setStreetName(e.target.value)}
  className="w-full h-16 md:h-20 px-4 py-2 rounded-lg border focus:outline-none focus:ring focus:border-blue-300 mt-10 text-2xl bg-gray-600 text-white"
/>
      <div className="flex">

     
      <div className="max-width-80rem ">

      <button className="px-4 py-2 rounded-full bg-blue-500 text-white mt-4 text-1xl font-bold " onClick={handleSearch}>Buscar Endereços</button>
      </div>
      </div>
      <div className="max-width-80rem mx-auto bg-white rounded-lg overflow-hidden shadow-lg mt-5 bg-[rgb(37,40,42)]" >

      {errorMessage && <p>{errorMessage}</p>}
      {addresses.length > 0 && (
        <div  className="bg-gray-600">
          <h2  className="text-slg font-semibold mb-2 bg-blue-500 text-white p-2" >Resultados  </h2>
          
          <ul >
            {addresses.map((address, index) => (
              <li key={index} >
                <p   className="text-lg font-semibold mb-2 text-red-600">Rua: {address.address.road}</p>
                <p  className="text-lg font-semibold mb-2">Bairro: {address.address.suburb}</p>
                <p  className="text-base border-b-2">CEP: {address.address.postcode}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
      </div>
    </div>
  );
}

export default searchcep;
