import db from "../db.js";

// Crear una nueva entrega
export const createEntrega = (req, res) => {
    const { Paquete_idPaquete, Usuario_idUsuario } = req.body;

    if (!Paquete_idPaquete || !Usuario_idUsuario) {
        return res.status(400).send('Paquete ID and Usuario ID are required');
    }

    // Verificar si existe el Paquete
    const checkPaqueteQuery = 'SELECT * FROM Material WHERE idPaquete = ?';
    db.query(checkPaqueteQuery, [Paquete_idPaquete], (err, paqueteResults) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Server error');
        }

        if (paqueteResults.length === 0) {
            return res.status(404).send('Paquete not found');
        }

        // Verificar si existe el Usuario
        const checkUsuarioQuery = 'SELECT * FROM Usuario WHERE idUsuario = ?';
        db.query(checkUsuarioQuery, [Usuario_idUsuario], (err, usuarioResults) => {
            if (err) {
                console.error(err);
                return res.status(500).send('Server error');
            }

            if (usuarioResults.length === 0) {
                return res.status(404).send('Usuario not found');
            }

            // Si ambos existen, procedemos a insertar la entrega
            const insertQuery = 'INSERT INTO Entrega (Paquete_idPaquete, Usuario_idUsuario) VALUES (?, ?)';
            db.query(insertQuery, [Paquete_idPaquete, Usuario_idUsuario], (err, results) => {
                if (err) {
                    console.error(err);
                    return res.status(500).send('Server error');
                }
                res.status(201).send('Entrega created successfully');
            });
        });
    });
};



// Obtener todas las entregas
export const getEntregas = (req, res) => {
    const query = 'SELECT * FROM Entrega';
    db.query(query, (err, results) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Server error');
        }
        res.json(results);
    });
};

// Obtener una entrega por ID
export const getEntregaById = (req, res) => {
    const entregaId = req.params.id;

    const query = 'SELECT * FROM Entrega WHERE Paquete_idPaquete = ? AND Usuario_idUsuario = ?';
    db.query(query, [entregaId], (err, results) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Server error');
        }
        if (results.length === 0) return res.status(404).send('Entrega not found');
        res.json(results[0]);
    });
};

// Actualizar una entrega
export const updateEntrega = (req, res) => {
    const entregaId = req.params.id;
    const { Paquete_idPaquete, Usuario_idUsuario } = req.body;

    if (!Paquete_idPaquete || !Usuario_idUsuario) {
        return res.status(400).send('Both Paquete_idPaquete and Usuario_idUsuario are required');
    }

    const query = `
    UPDATE Entrega
    SET Paquete_idPaquete = ?, Usuario_idUsuario = ?
    WHERE Paquete_idPaquete = ? AND Usuario_idUsuario = ?
  `;

    db.query(query, [Paquete_idPaquete, Usuario_idUsuario, entregaId], (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Error updating entrega');
        }

        if (result.affectedRows === 0) return res.status(404).send('Entrega not found');
        res.json({ message: 'Entrega updated successfully' });
    });
};

// Eliminar una entrega
export const deleteEntrega = (req, res) => {
    const entregaId = req.params.id;

    const query = 'DELETE FROM Entrega WHERE Paquete_idPaquete = ? AND Usuario_idUsuario = ?';
    db.query(query, [entregaId], (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Error deleting entrega');
        }

        if (result.affectedRows === 0) return res.status(404).send('Entrega not found');
        res.json({ message: 'Entrega deleted successfully' });
    });
};
