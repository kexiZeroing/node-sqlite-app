// Added in v22.5.0 and enable this API with the `--experimental-sqlite` CLI flag
// https://nodejs.org/docs/v22.12.0/api/sqlite.html#sqlite

'use strict';
import { DatabaseSync } from 'node:sqlite';
const database = new DatabaseSync(':memory:');

database.exec(`
  CREATE TABLE data(
    key INTEGER PRIMARY KEY,
    value TEXT
  ) STRICT
`);

// Create a prepared statement to insert data into the database.
const insert = database.prepare('INSERT INTO data (key, value) VALUES (?, ?)');
// Execute the prepared statement with bound values.
insert.run(1, 'hello');
insert.run(2, 'world');

// Create a prepared statement to read data from the database.
const query = database.prepare('SELECT * FROM data ORDER BY key');
console.log(query.all());

// Use a file-backed database 
const localDatabase = new DatabaseSync('./test.db');

const queryUser = localDatabase.prepare('SELECT * FROM users');
console.log(queryUser.all());
