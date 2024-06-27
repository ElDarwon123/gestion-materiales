import connection from "../db.js";

// Crear Material
export const createMaterial = (req, res) => {
  const { nombre, descripcion, estado } = req.body;

  if (!nombre || !descripcion || estado === undefined) {
    return res.status(400).send('All fields are required');
  }

  const query = 'INSERT INTO Material (nombre, descripcion, estado) VALUES (?, ?, ?)';

  connection.query(query, [nombre, descripcion, estado], (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).send('Server error');
    }
    res.status(201).send('Material created successfully');
  });
};

// Obtener todos los Materiales
export const getMaterials = (req, res) => {
  const query = 'SELECT * FROM Material';

  connection.query(query, (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).send('Server error');
    }
    res.json(results);
  });
};

// Obtener Material por ID
export const getMaterialById = (req, res) => {
  const { id } = req.params;
  const query = 'SELECT * FROM Material WHERE idPaquete = ?';

  connection.query(query, [id], (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).send('Server error');
    }
    if (results.length === 0) {
      return res.status(404).send('Material not found');
    }
    res.json(results[0]);
  });
};

// Actualizar Material
export const updateMaterial = (req, res) => {
  const { id } = req.params;
  const { nombre, descripcion, estado } = req.body;

  if (!nombre || !descripcion || estado === undefined) {
    return res.status(400).send('All fields are required');
  }

  const query = `
    UPDATE Material
    SET nombre = ?, descripcion = ?, estado = ?
    WHERE idPaquete = ?
  `;

  connection.query(query, [nombre, descripcion, estado, id], (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).send('Server error');
    }

    if (result.affectedRows === 0) {
      return res.status(404).send('Material not found');
    }

    res.json({ message: 'Material updated successfully' });
  });
};

// Eliminar Material
export const deleteMaterial = (req, res) => {
  const { id } = req.params;
  const query = 'DELETE FROM Material WHERE idPaquete = ?';

  connection.query(query, [id], (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).send('Server error');
    }

    if (result.affectedRows === 0) {
      return res.status(404).send('Material not found');
    }

    res.json({ message: 'Material deleted successfully' });
  });
};
