# Node.js with SQLite Project

Beginner friendly tutorial to learn how to interact with SQLite databases from a Node.js application.

- `index.js`: a basic express app that reads and writes data from the SQLite database.
- `sql-test.js`: run sql in JavaScript via Node.js and sqlite.
- `cli.sh`: run sqlite from the command line.

## SQLite
SQLite is a software library that provides a relational database management system. A few well-known facts to get started:

- SQLite is the most common DBMS in the world, shipped with all popular operating systems.
- SQLite is serverless.
- For developers, SQLite is embedded directly into the app.
- For everyone else, there is a convenient database console (REPL), provided as a single file (`sqlite3.exe` on Windows, `sqlite3` on Linux / macOS).

```sh
which sqlite3

man sqlite3
```

> sqlite3 - A command line interface for SQLite version 3
> 
> sqlite3 is a terminal-based front-end to the SQLite library that can evaluate queries interactively and display the results in multiple formats.

[node-sqlite3](https://github.com/TryGhost/node-sqlite3) is an asynchronous, non-blocking SQLite3 bindings for Node.js.

[better-sqlite3](https://github.com/WiseLibs/better-sqlite3) is the fastest and simplest library for SQLite3 in Node.js. It is much faster than node-sqlite3 in most cases.

### Some fun facts about SQLite
1. SQLite is the most deployed and most used database. It is likely used more than all other database engines combined.
2. They don’t allow outside contributions. You cannot just send a pull request and hope the patch will be accepted.
3. There are over 600 lines of test code for every line of code in SQLite. Tests cover 100% of branches in the library. The test suite is extremely diverse, including fuzz tests, boundary value tests, regression tests, and tests that simulate operating system crashes, power losses, I/O errors, and out-of-memory errors.
4. It’s an interesting business model. They generate revenue through licenses, paid support, maintenance services, consortium membership, and commercial extensions.
5. All the of the source code files come with a blessing.
6. SQLite’s author D. Richard Hipp (DRH) did not find existing version control systems suitable. So he wrote his own called Fossil. Fossil is powered by SQLite, of course.

## Drizzle ORM
- Drizzle is a modern TypeScript ORM.
- Drizzle supports every PostgreSQL, MySQL and SQLite databases, including serverless ones.
- Drizzle ORM is designed to be a thin typed layer on top of SQL. It lets you declare SQL schema and build both relational and SQL-like queries.
- Drizzle Kit is a CLI companion for automatic SQL migrations generation and rapid prototyping.
- Drizzle Studio is a new way for you to explore SQL database on Drizzle projects: `npx drizzle-kit studio`.
