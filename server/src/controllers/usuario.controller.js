import db from "../db.js";

export const getUserById = (req, res) => {
    const userId = req.params.id;
  
    const query = 'SELECT idUsuario, nombre, apellido, email, Role_idRole FROM Usuario WHERE idUsuario = ?';
    db.query(query, [userId], (err, results) => {
      if (err) return res.status(500).send('Error en el servidor');
      if (results.length === 0) return res.status(404).send('Usuario no encontrado');
  
      const user = results[0];
      res.json(user);
    });
  };

  export const getUsers = (req, res) => {
  
    const query = 'SELECT idUsuario, nombre, apellido, email, Role_idRole FROM Usuario ';
    db.query(query, (err, results) => {
      if (err) return res.status(500).send('Error en el servidor');
      if (results.length === 0) return res.status(404).send('Usuario no encontrado');
  
      const user = results[0];
      res.json(results);
    });
  };
  export const updateUser = (req, res) => {
    const userId = req.params.id;
    const updatedUser = req.body;
  
  
    const query = `
      UPDATE Usuario
      SET nombre = ?, apellido = ?, email = ?, password = ?, Role_idRole = ?
      WHERE idUsuario = ?
    `;
  
    db.query(query, [updatedUser.nombre, updatedUser.apellido, updatedUser.email, updatedUser.password, updatedUser.Role_idRole, userId], (err, result) => {
      if (err) return res.status(500).send('Error updating user');
  
      if (result.affectedRows === 0) return res.status(404).send('Usuario no encontrado'); 
  
      res.json({ message: 'Usuario actualizado exitosamente' }); 
    });
  };
  export const deleteUser = (req, res) => {
    const userId = req.params.id;
  
    const query = `DELETE FROM Usuario WHERE idUsuario = ?`;
  
    db.query(query, [userId], (err, result) => {
      if (err) return res.status(500).send('Error deleting user');
  
      if (result.affectedRows === 0) return res.status(404).send('Usuario no encontrado'); // User not found message
  
      res.json({ message: 'Usuario eliminado exitosamente' }); // User deleted successfully message (in Spanish)
    });
  };