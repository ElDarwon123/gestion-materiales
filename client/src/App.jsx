import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import HomePage from './pages/Home.jsx';
import HomeUser from './pages/HomeUser.jsx';
import { AuthProvider, ProtectedRoute } from './context/authContext.jsx';
import UsersList from './components/User/UserList.jsx';
import UserDetails from './components/User/UserDetail.jsx';
import UpdateUser from './components/User/UpdateUser.jsx';
import MaterialsList from './components/Material/MaterialList.jsx';
import CreateMaterial from './components/Material/CreateMaterial.jsx';
import MaterialDetails from './components/Material/MaterialDetail.jsx';
import UpdateMaterial from './components/Material/UpdateMaterial.jsx';
import EntregaList from './components/Entrega/EntregaList.jsx';
import UpdateEntrega from './components/Entrega/UpdateEntrega.jsx';
import EntregaDetail from './components/Entrega/EntregaDetail.jsx';
import CreateEntrega from './components/Entrega/CreateEntrega.jsx';
import DeleteEntrega from './components/Entrega/DeleteEntrega.jsx';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path='/register' element={<Register/>}/>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<HomeUser />} />
          <Route path="/user" element={<UsersList />} />
          <Route path="/user/:id" element={<UserDetails />} />
          <Route path="/user/:id/edit" element={<UpdateUser />} />
          <Route path="/material" element={<MaterialsList/>} />
          <Route path="/material/:id" element={<MaterialDetails/>} />
          <Route path="/material/create" element={<CreateMaterial />} />
          <Route path="/material/:id/edit" element={<UpdateMaterial/>} />
          <Route path="/entrega" element={<EntregaDetail/>} />
          <Route path="/entrega/:id" element={<EntregaList/>} />
          <Route path="/entrega/:id/edit" element={<UpdateEntrega />} />
          <Route path="/entrega/create" element={<CreateEntrega />} />
          <Route path="/entrega/:id/delete" element={<DeleteEntrega/>} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
