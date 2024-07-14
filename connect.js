import sqlite3 from 'sqlite3';
const sql3 = sqlite3.verbose();

const db = new sql3.Database('./test.db', sqlite3.OPEN_READWRITE, connected);

function connected(err) {
  if (err) {
    console.log(err.message);
    return;
  }
  console.log('Created the DB or SQLite DB does already exist');
}

let sql = `CREATE TABLE IF NOT EXISTS products (
  id INTEGER PRIMARY KEY,
  name TEXT NOT NULL,
  description TEXT NOT NULL
)`;

db.run(sql, [], (err) => {
  if (err) {
    console.log('error creating products table');
    return;
  }
  console.log('CREATED TABLE');
});

export default db;