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
      res.json(user);
    });
  };