import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [token, setToken] = useState('');
  const navigator = useNavigate()
  const HandleSubmit = async (e) => {
    e.preventDefault();
    try {
      
      const response = await axios.post('http://localhost:4000/auth/login', {
        email,
        password,
      });
      
      
      setToken(response.data.token);
      localStorage.setItem('user', JSON.stringify(response.data))
      console.log(response.data);
      setMessage('Login exitoso');
      navigator('/home')
      return response.data
    } catch (error) {
      setMessage('Error en el login');
      navigator('/login')
    }
  };

  return (
  
   
    <div className='bg-white h-full p-10 text-slate-600 flex items-center justify-center' >
    
      <form onSubmit={HandleSubmit}>
        <div className='mt-5'>
          <label>Email:</label>
          <input className='bg-white' type="email" value={email} onChange={(e) => setEmail(e.target.value)} required placeholder='  Email'/>
        </div>
        <div className='mt-5'>
          <label>Password:</label>
          <input className='bg-white' type="password" value={password} onChange={(e) => setPassword(e.target.value)} required placeholder='  Password' />
        </div>
        <button className='mt-5 bg-slate-600 rounded-lg text-white px-5 py-2' type="submit">Login</button>
      </form>
      {message && <p>{message}</p>}
      {token && (
        <div>
          <h3>Token:</h3>
          <p>{token}</p>
        </div>
      )}
    </div>

  );
};

export default Login;
