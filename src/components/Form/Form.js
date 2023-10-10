import React, { useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    file: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (event) => {
    setFormData({
      ...formData,
      file: event.target.files[0],
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    setFormData({
      name: "",
      email: "",
      message: "",
      file: null,
    });
  };

  return (
    <div className=" bg-[rgb(27,27,27)] min-h-screen flex justify-center items-center">
      <div className="bg-gray-700 p-12 rounded-lg shadow-md w-full md:max-w-md">
        <h1 className="text-3xl font-bold mb-6 text-center text-blue-500">
          Formulário de Contato
        </h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block font-semibold mb-2">
              Nome
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="p-3 w-full bg-gray-100  rounded-full text-lg text-black  border border-blue-500 "
              placeholder="Digite seu Nome"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block font-semibold mb-2">
              E-mail
            </label>
            <input
              placeholder="Digite seu Email"
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="p-3 w-full bg-gray-100 rounded-full text-lg text-black border border-blue-500"
              required
            />
          </div>

          <div>
            <label htmlFor="message" className="block font-semibold mb-2">
              Mensagem
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              className="p-3 w-full h-40 bg-gray-100 rounded-md text-lg text-black border border-blue-500"
            />
          </div>

          <div>
            <label
              htmlFor="file"
              className="block cursor-pointer border p-2 w-full text-center bg-blue-500 text-white hover:bg-blue-600 text-lg font-semibold mb-2  rounded-full border border-blue-500"
            >
              Selecionar Arquivo
            </label>
            <input
              type="file"
              id="file"
              name="file"
              onChange={handleFileChange}
              className="hidden"
            />
          </div>

          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white  rounded-full p-2 w-full text-lg font-semibold"
          >
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
