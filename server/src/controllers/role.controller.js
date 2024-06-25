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

export const getRoles = () => {
    const query = 'SELECT * FROM Role';
}