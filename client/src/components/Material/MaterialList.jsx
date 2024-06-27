import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const MaterialsList = () => {
  const [materials, setMaterials] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:4000/material')
      .then(response => {
        setMaterials(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the materials!', error);
      });
  }, []);

  const handleDelete = (id) => {
    axios.delete(`http://localhost:4000/material/${id}`)
      .then(response => {
        setMaterials(materials.filter(material => material.idPaquete !== id));
      })
      .catch(error => {
        console.error('There was an error deleting the material!', error);
      });
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Lista de Materiales</h1>
      <table className="min-w-full bg-white">
        <thead className="bg-gray-800 text-white">
          <tr>
            <th className="w-1/4 py-2">ID</th>
            <th className="w-1/4 py-2">Nombre</th>
            <th className="w-1/4 py-2">Descripción</th>
            <th className="w-1/4 py-2">Estado</th>
            <th className="w-1/4 py-2">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {materials.map(material => (
            <tr key={material.idPaquete} className="text-center">
              <td className="border px-4 py-2 text-black">{material.idPaquete}</td>
              <td className="border px-4 py-2 text-black">{material.nombre}</td>
              <td className="border px-4 py-2 text-black">{material.descripcion}</td>
              <td className="border px-4 py-2 text-black">{material.estado ? 'Activo' : 'Inactivo'}</td>
              <td className="border px-4 py-2">
                <Link to={`/material/${material.idPaquete}`} className="bg-green-500 text-white px-2 py-1 rounded mx-1">Detalles</Link>
                <Link to={`/material/${material.idPaquete}/edit`} className="bg-yellow-500 text-white px-2 py-1 rounded mx-1">Editar</Link>
                <button onClick={() => handleDelete(material.idPaquete)} className="bg-red-500 text-white px-2 py-1 rounded mx-1">Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MaterialsList;
