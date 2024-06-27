import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

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
      <table className="min-w-full bg-slate-600">
        <thead>
          <tr>
          <th className="py-2 px-4 border-b text-black">ID Entrega</th>
            <th className="py-2 px-4 border-b text-black">ID Paquete</th>
            <th className="py-2 px-4 border-b text-black">ID Usuario</th>
            <th className="py-2 px-4 border-b text-black">Acciones</th>
          </tr>
        </thead>
        <tbody className='bg-slate-500'>
          {entregas.map(entrega => (
            <tr key={entrega.Paquete_idPaquete}>
                <td className="py-2 px-4 border-b text-black">{entrega.idEntrega}</td>
              <td className="py-2 px-4 border-b text-black">{entrega.Paquete_idPaquete}</td>
              <td className="py-2 px-4 border-b text-black">{entrega.Usuario_idUsuario}</td>
              <td className="py-2 px-4 border-b text-black">
                <Link to={`/entrega/${entrega.Paquete_idPaquete}`} className="text-green-500 hover:text-green-700">Detalles</Link>
                <Link to={`/entrega/${entrega.Paquete_idPaquete}/edit`} className="text-blue-500 hover:text-blue-700">Actualizar</Link>
                <Link to={`/entrega/${entrega.Paquete_idPaquete}/delete`} className="text-red-500 hover:text-red-700">Eliminar</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EntregaList;
