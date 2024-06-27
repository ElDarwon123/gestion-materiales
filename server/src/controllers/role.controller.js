import connection from "../db.js";

export const createRole = (req, res) => {
  const { nombre } = req.body;

  if (!nombre) {
    return res.status(400).send('Role name is required');
  }

  const query = 'INSERT INTO Role (nombre) VALUES (?)';

  connection.query(query, [nombre], (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).send('Server error');
    }
    res.status(201).send('Role created successfully');
  });
};

export const getRoles = (req, res) => {
  const query = 'SELECT * FROM Role';

  connection.query(query, (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).send('Server error');
    }
    res.status(200).json(results);
  });
};

export const getRoleById = (req, res) => {
  const roleId = req.params.id;

  const query = 'SELECT * FROM Role WHERE idRole = ?';

  connection.query(query, [roleId], (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).send('Server error');
    }
    if (results.length === 0) {
      return res.status(404).send('Role not found');
    }
    res.status(200).json(results[0]);
  });
};

export const updateRole = (req, res) => {
  const roleId = req.params.id;
  const { nombre } = req.body;

  if (!nombre) {
    return res.status(400).send('Role name is required');
  }

  const query = 'UPDATE Role SET nombre = ? WHERE idRole = ?';

  connection.query(query, [nombre, roleId], (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).send('Server error');
    }
    if (results.affectedRows === 0) {
      return res.status(404).send('Role not found');
    }
    res.status(200).send('Role updated successfully');
  });
};

export const deleteRole = (req, res) => {
  const roleId = req.params.id;

  const query = 'DELETE FROM Role WHERE idRole = ?';

  connection.query(query, [roleId], (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).send('Server error');
    }
    if (results.affectedRows === 0) {
      return res.status(404).send('Role not found');
    }
    res.status(200).send('Role deleted successfully');
  });
};