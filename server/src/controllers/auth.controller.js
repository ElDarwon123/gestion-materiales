import connection from "../db.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { SECRET } from "../config.js";

export const Register = (req, res) => {
    const { nombre, apellido, email, password, role_idRole } = req.body;
    const hashedPassword = bcrypt.hashSync(password, 8);

    const query = 'INSERT INTO Usuario (nombre, apellido, email, password, Role_idRole) VALUES (?, ?, ?, ?, ?)';

    connection.query(query, [nombre, apellido, email, hashedPassword, role_idRole], (err, results) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Server error');
        }
        res.status(201).send('User registered successfully');
    });
};

export const Login = (req, res) => {
    const { email, password } = req.body;

    const query = 'SELECT * FROM Usuario WHERE email = ?';

    connection.query(query, [email], (err, results) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Server error');
        }

        if (results.length === 0) {
            return res.status(404).send('User not found');
        }

        const user = results[0];
        const passwordIsValid = bcrypt.compareSync(password, user.password);

        if (!passwordIsValid) {
            return res.status(401).send('Invalid password');
        }

        const token = jwt.sign({ id: user.idUsuario, role: user.Role_idRole }, SECRET, {
            expiresIn: 86400, // 24 hours
        });

        res.status(200).send({ auth: true, token });
    });
};
