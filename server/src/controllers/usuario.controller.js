import db from "../db.js";

export const createUser = (req, res) => {
    const { nombre, apellido, email, contrasena, Role_idRole } = req.body;

    if (!Role_idRole) return res.status(400).json({ message: "idROle is required" })

    const sql = 'INSERT INTO Usuario (nombre, apellido, email, Role_idRole) VALUES (?, ?, ?, ?, ?)';
    const values = [nombre, apellido, email, contrasena, Role_idRole]

    db.query
}