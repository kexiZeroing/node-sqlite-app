import sqlite3 from 'sqlite3';
const sql3 = sqlite3.verbose();

// Connect to DB
const db = new sql3.Database('./test.db', sqlite3.OPEN_READWRITE, (err) => {
  if (err) {
    console.error(err.message);
  }
});

let sql;

// Create table
sql = `CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, age INTEGER)`;
db.run(sql);

// // Insert data
// sql = `INSERT INTO users (name, age) VALUES ('Alice', 25)`;
// db.run(sql);

// Query data
sql = `SELECT * FROM users`;
db.all(sql, [], (err, rows) => {
  if (err) {
    console.error(err.message);
  }
  rows.forEach((row) => {
    console.log(row);
  });
});

// // Update data
// sql = `UPDATE users SET name = 'Bob' WHERE id = 1`;
// db.run(sql);

// // Delete data
// sql = `DELETE FROM users WHERE id = 3`;
// db.run(sql);

// // Drop table
// sql = `DROP TABLE users`;
// db.run(sql);
