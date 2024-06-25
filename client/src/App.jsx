import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import HomePage from './pages/Home.jsx';
import HomeUser from './pages/HomeUser.jsx';
import { AuthProvider, ProtectedRoute } from './context/authContext.jsx';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/login" element={<Login />} />
          {/* Ruta protegida para registro solo para usuarios Admin */} 
          
          <Route path='/register' element={<Register/>}/>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<HomeUser />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
