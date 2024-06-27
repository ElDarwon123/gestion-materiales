import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const MaterialDetails = () => {
  const [material, setMaterial] = useState({});
  const { id } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:4000/material/${id}`)
      .then(response => {
        setMaterial(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the material details!', error);
      });
  }, [id]);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Detalles del Material</h1>
      <div className="mb-4">
        <label className="block text-gray-700">Nombre</label>
        <p className="mt-1 p-2 w-full border rounded">{material.nombre}</p>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Descripción</label>
        <p className="mt-1 p-2 w-full border rounded">{material.descripcion}</p>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Estado</label>
        <p className="mt-1 p-2 w-full border rounded">{material.estado ? 'Activo' : 'Inactivo'}</p>
      </div>
    </div>
  );
};

export default MaterialDetails;
