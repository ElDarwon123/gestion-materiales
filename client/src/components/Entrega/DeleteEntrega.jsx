import React from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const DeleteEntrega = () => {
  const { id } = useParams();
  

  const handleDelete = () => {
    axios.delete(`http://localhost:4000/api/entregas/${id}`)
      .then(response => {
        
      })
      .catch(error => {
        console.error('There was an error deleting the entrega!', error);
      });
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Eliminar Entrega</h1>
      <p>¿Estás seguro de que deseas eliminar esta entrega?</p>
      <button onClick={handleDelete} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
        Eliminar
      </button>
    </div>
  );
};

export default DeleteEntrega;
