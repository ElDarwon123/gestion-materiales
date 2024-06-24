import mysql from "mysql2";
const conn = mysql.createConnection({
  host: "localhost",
  user: "Steven",
  password: "admin123",
  database: "ges",
});
conn.connect((err) => {
  if (err) {
    console.error("Error al conectar la db", err.stack);
  return;
}
    console.log('Conectado a la db', conn.threadId);
});

export default conn