import React, { useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    file:  "",
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
    <div className="max-w-2xl mx-auto p-5 min-h-screen flex items-center">
      <form
        onSubmit={handleSubmit}
        className="space-y-10 p-7   shadow-md w-full "
      >
        <h1 className="text-3xl font-bold mb-4">Formulário de Contato</h1>
        <div>
          <label
            htmlFor="name"
            className="block font-medium text-2xl font-bold mb-2"
          >
            Nome:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className="p-4  w-full  text-white rounded-full bg-gray-600 text-2xl"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block font-medium text-2xl font-bold mb-2"
          >
            E-mail:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="p-4 w-full text-white rounded-full bg-gray-600 text-2xl"
          />
        </div>
        <div>
          <label
            htmlFor="message"
            className="block font-medium text-2xl font-bold mb-2"
          >
            Mensagem:
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            className="border rounded text-white p-2 w-full  h-40  bg-gray-600 text-2xl"
          />
        </div>
        <div>
          <label
            htmlFor="file"
            className="block cursor-pointer border rounded p-2 w-full text-center bg-blue-500 text-white hover:bg-blue-600 text-2xl font-bold mb-2"
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
          className="bg-blue-500 text-white rounded-full p-2 hover:bg-blue-600 w-full text-2xl font-bold "
        >
          Enviar
        </button>
      </form>
    </div>
  );
};

export default Form;
