import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate  } from "react-router-dom";
const Register = () => {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const [message, setMessage] = useState('');
  const navigator = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:4000/auth/register', {
        nombre,
        apellido,
        email,
        password,
        role_idRole: role,
      });
      setMessage(response.data);
      



    } catch (error) {
      setMessage('Error en el registro');
    }
  };

  return (
    <div className='bg-white h-full p-10 text-slate-600 flex items-center justify-center'>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nombre: </label>
          <input  className='bg-white' type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} required placeholder='  Nombre'/>
        </div>
        <div>
          <label>Apellido: </label>
          <input  className='bg-white' type="text" value={apellido} onChange={(e) => setApellido(e.target.value)} required placeholder=' Apellido'/>
        </div>
        <div>
          <label>Email: </label>
          <input  className='bg-white' type="email" value={email} onChange={(e) => setEmail(e.target.value)} required placeholder='  Email'/>
        </div>
        <div>
          <label>Password: </label>
          <input  className='bg-white' type="password" value={password} onChange={(e) => setPassword(e.target.value)} required placeholder='Password' />
        </div>
        <div>
          <label>Role: </label>
          <select className='bg-white w-fit' onChange={(e) => setRole(e.target.value)} required>
            <option value="1">Administrador</option>
            <option value="2">Estudiante</option>
            <option value="3">Repartidor</option>
          </select>
          
        </div>
        <button className='mt-5 bg-slate-600 rounded-lg text-white px-5 py-2' type="submit">Registrar</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default Register;
