import mysql from "mysql2";
import { DATABASE, PASSWORD_DB, USER_DB } from "./config.js";
const conn = mysql.createConnection({
  host: "localhost",
  user: USER_DB,
  password: PASSWORD_DB,
  database: DATABASE,
});
conn.connect((err) => {
  if (err) {
    console.error("Error al conectar la db", err.stack);
  return;
}
    console.log('Conectado a la db', conn.threadId);
});

export default conn