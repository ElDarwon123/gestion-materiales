import React, { useEffect, useState } from 'react';
import axios from 'axios';

const EntregaList = () => {
  const [entregas, setEntregas] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:4000/entrega')
      .then(response => {
        setEntregas(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the entregas!', error);
      });
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Lista de Entregas</h1>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">ID Paquete</th>
            <th className="py-2 px-4 border-b">ID Usuario</th>
          </tr>
        </thead>
        <tbody>
          {entregas.map(entrega => (
            <tr key={entrega.Paquete_idPaquete}>
              <td className="py-2 px-4 border-b text-black">{entrega.Paquete_idPaquete}</td>
              <td className="py-2 px-4 border-b text-black">{entrega.Usuario_idUsuario}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EntregaList;
