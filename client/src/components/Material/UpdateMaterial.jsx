import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const UpdateMaterial = () => {
  const [material, setMaterial] = useState({
    nombre: '',
    descripcion: '',
    estado: 1
  });
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`/api/materials/${id}`)
      .then(response => {
        setMaterial(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the material!', error);
      });
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMaterial({ ...material, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:4000/material/${id}`, material)
      .then(response => {
        navigate('/materials');
      })
      .catch(error => {
        console.error('There was an error updating the material!', error);
      });
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Actualizar Material</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700">Nombre</label>
          <input
            type="text"
            name="nombre"
            value={material.nombre}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Descripción</label>
          <input
            type="text"
            name="descripcion"
            value={material.descripcion}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Estado</label>
          <select
            name="estado"
            value={material.estado}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded"
          >
            <option value={1}>Activo</option>
            <option value={0}>Inactivo</option>
          </select>
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Actualizar</button>
      </form>
    </div>
  );
};

export default UpdateMaterial;
