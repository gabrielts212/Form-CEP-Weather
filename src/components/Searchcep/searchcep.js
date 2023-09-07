import React, { useState } from "react";
import axios from "axios";

function SearchCep() {
  const [streetName, setStreetName] = useState("");
  const [addresses, setAddresses] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `https://nominatim.openstreetmap.org/search?q=${streetName}&format=json&addressdetails=1`
      );

      if (response.status === 200) {
        setAddresses(response.data);
        setErrorMessage("");
      } else {
        setAddresses([]);
        setErrorMessage("Erro ao buscar endereços");
      }
    } catch (error) {
      console.error("Erro ao buscar endereços:", error);
      setErrorMessage("Erro ao buscar endereços");
    }
  };

  return (
    <div className="min-h-screen bg-[rgb(27,27,27)] p-4">
      <h1 className="text-2xl font-bold mb-4 text-white">Digite um Endereço</h1>
      <input
        type="text"
        placeholder="Digite o nome da Rua"
        value={streetName}
        onChange={(e) => setStreetName(e.target.value)}
        className="w-full h-20 px-4 py-2 rounded-lg border bg-gray-600 text-white text-2xl focus:outline-none focus:ring focus:border-blue-300"
      />
      <div className="flex justify-center">
        <button
          className="px-6 py-3 rounded-full bg-blue-500 text-white mt-4 text-xl font-bold"
          onClick={handleSearch}
        >
          Buscar Endereços
        </button>
      </div>
      <div className="bg-[rgb(37,40,42)] rounded-lg overflow-hidden shadow-lg mt-5">
        {errorMessage && (
          <p className="text-red-500 p-4">{errorMessage}</p>
        )}
        {addresses.length > 0 && (
          <div>
            <h2 className="bg-blue-500 text-white text-2xl font-bold p-4">
              Resultados
            </h2>
            <ul>
              {addresses.map((address, index) => (
                <li key={index} className="p-4 border-b border-gray-400">
                  <p className="text-2xl text-white font-bold mb-2">
                    {address.address.road}
                  </p>
                  <p className="text-lg font-semibold mb-2">
                    Bairro: {address.address.suburb}
                  </p>
                  <p className="text-lg font-semibold">
                    CEP: {address.address.postcode}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default SearchCep;
