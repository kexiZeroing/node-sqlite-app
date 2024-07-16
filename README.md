# Node.js with SQLite Project

Beginner friendly tutorial to learn how to interact with SQLite databases from a Node.js application.

- `index.js`: a basic express app that reads and writes data from the SQLite database.
- `sql-test.js`: run sql in JavaScript via Node.js and sqlite.
- `cli.sh`: run sqlite from the command line.

## SQLite

SQLite is a software library that provides a relational database management system. If you have a Mac, sqlite3 should be available on there.

```sh
which sqlite3

man sqlite3
```

> sqlite3 - A command line interface for SQLite version 3
> 
> sqlite3 is a terminal-based front-end to the SQLite library that can evaluate queries interactively and display the results in multiple formats.

[node-sqlite3](https://github.com/TryGhost/node-sqlite3) is an asynchronous, non-blocking SQLite3 bindings for Node.js.

[better-sqlite3](https://github.com/WiseLibs/better-sqlite3) is the fastest and simplest library for SQLite3 in Node.js. It is much faster than node-sqlite3 in most cases.

## Drizzle ORM
- Drizzle is a modern TypeScript ORM.
- Drizzle supports every PostgreSQL, MySQL and SQLite databases, including serverless ones.
- Drizzle ORM is designed to be a thin typed layer on top of SQL. It lets you declare SQL schema and build both relational and SQL-like queries.
- Drizzle Kit is a CLI companion for automatic SQL migrations generation and rapid prototyping.
- Drizzle Studio is a new way for you to explore SQL database on Drizzle projects: `npx drizzle-kit studio`.
