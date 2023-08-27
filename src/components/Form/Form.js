import React, { useState } from 'react';

function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (name && email && message && selectedFile) {
   
      console.log('Enviando dados e arquivo:', { name, email, message, selectedFile });
    }
  };

  return (
    
    <div className="max-w-md  mx-auto p-5 min-h-screen flex items-center " >
      <form onSubmit={handleSubmit} className="space-y-10  p-7 bg-[rgb(27,27,27)] rounded-lg shadow-md  ">
      <h1 className="text-xl font-semibold mb-4">Formulário de Contato</h1>
        <div>
          <label htmlFor="nameInput" className="block font-medium mb-1">Nome:</label>
          <input
            type="text"
            id="nameInput"
            value={name}
            onChange={handleNameChange}
            className=" p-2 w-full text-white  rounded-full p-5 bg-gray-600 " 
          />
        </div>
        <div>
          <label htmlFor="emailInput" className="block font-medium mb-1 ">E-mail:</label>
          <input
            type="email"
            id="emailInput"
            value={email}
            onChange={handleEmailChange}
            className="  w-full text-white rounded-full p-5 bg-gray-600 "
          />
        </div>
        <div>
          <label htmlFor="messageInput" className="block font-medium mb-1">Mensagem:</label>
          <textarea
            id="messageInput"
            value={message}
            onChange={handleMessageChange}
            className="border rounded p-2 w-full h-24 text-white  rounded-full p-3 bg-gray-600"
          />
        </div>
        <div>
          <label htmlFor="fileInput" className="block font-medium mb-1">Anexar Arquivo:</label>
          <input
            type="file"
            id="fileInput"
            onChange={handleFileChange}
            className="border rounded p-2 w-full"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white rounded-full p-2 hover:bg-blue-600 w-full "
        >
          Enviar
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
