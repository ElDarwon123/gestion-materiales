import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const UsersList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:4000/user')
      .then(response => {
        if (Array.isArray(response.data)) {
          setUsers(response.data);
        } else {
          console.error('La respuesta no es un arreglo');
        }
      })
      .catch(error => {
        console.error("Hubo un error al obtener los usuarios!", error);
      });
  }, []);

  const handleDelete = (id) => {
    axios.delete(`http://localhost:4000/user/${id}`)
      .then(response => {
        setUsers(users.filter(user => user.idUsuario !== id));
      })
      .catch(error => {
        console.error('There was an error deleting the user!', error);
      });
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Lista de Usuarios</h1>
      <table className="min-w-full bg-white">
        <thead className="bg-gray-800 text-white">
          <tr>
            <th className="w-1/4 py-2">ID</th>
            <th className="w-1/4 py-2">Nombre</th>
            <th className="w-1/4 py-2">Email</th>
            <th className="w-1/4 py-2">Rol</th>
            <th className="w-1/4 py-2">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.idUsuario} className="text-center">
              <td className="border px-4 py-2 text-black">{user.idUsuario}</td>
              <td className="border px-4 py-2 text-black">{user.nombre} {user.apellido}</td>
              <td className="border px-4 py-2 text-black">{user.email}</td>
              <td className="border px-4 py-2 text-black">{user.Role_idRole}</td>
              <td className="border px-4 py-2 text-black">
                <Link to={`/user/${user.idUsuario}`} className="bg-green-500 text-white px-2 py-1 rounded mx-1">Detalles</Link>
                <Link to={`/user/edit/${user.idUsuario}`} className="bg-yellow-500 text-white px-2 py-1 rounded mx-1">Editar</Link>
                <button onClick={() => handleDelete(user.idUsuario)} className="bg-red-500 text-white px-2 py-1 rounded mx-1">Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UsersList;
