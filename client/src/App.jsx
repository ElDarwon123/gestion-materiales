import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
//import useAuth from "./hooks/useAuth.jsx";
import HomePage from "./pages/Home.jsx";
function App() {

  //const { user } = useAuth()
  /* {user && user.role === 'Admin' ? (
          <Route path="/register" element={<Register />} />
        ) : (
          <Navigate to="/" replace />
        )} */
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<HomePage/>} />
        

        
      </Routes>
    </BrowserRouter>
  );
}

export default App;