import React, { useState } from 'react';
import axios from 'axios';

const CreateEntrega = () => {
  const [entrega, setEntrega] = useState({
    Paquete_idPaquete: '',
    Usuario_idUsuario: ''
  });


  const handleChange = (e) => {
    const { name, value } = e.target;
    setEntrega({ ...entrega, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post('http://localhost:4000/entrega', entrega)
      .then(response => {
        
      })
      .catch(error => {
        console.error('There was an error creating the entrega!', error);
      });
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Crear Entrega</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="Paquete_idPaquete">
            ID Paquete
          </label>
          <input
            type="text"
            name="Paquete_idPaquete"
            value={entrega.Paquete_idPaquete}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="Usuario_idUsuario">
            ID Usuario
          </label>
          <input
            type="text"
            name="Usuario_idUsuario"
            value={entrega.Usuario_idUsuario}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          Crear
        </button>
      </form>
    </div>
  );
};

export default CreateEntrega;
