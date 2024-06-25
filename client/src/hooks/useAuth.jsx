import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const useAuth = () => {
  const [user, setUser] = useState(null);
  const navigator = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          throw new Error('Token no encontrado');
        }

        // Decodificar el token (opcional, depende de cómo manejes el token en tu backend)
        const decodedToken = parseJwt(token);
        const userId = decodedToken.id;

        // Hacer una solicitud al servidor para obtener los detalles del usuario
        const response = await axios.get(`http://localhost:4000/users/${userId}`, {
          headers: { Authorization: `Bearer ${token}` }
        });
        
        // Verificar si el usuario es admin
        if (response.data.role === 'Admin') {
          setUser(response.data);
        } else {
          throw new Error('Acceso no autorizado');
        }
      } catch (error) {
        console.error('Error de autenticación:', error);
        navigator('/'); // Redirigir al login si hay algún error o el usuario no es Admin
      }
    };

    fetchUser();
  }, [navigator]);

  return { user };
};


const parseJwt = (token) => {
  try {
    return JSON.parse(atob(token.split('.')[1]));
  } catch (e) {
    return null;
  }
};

export default useAuth;
