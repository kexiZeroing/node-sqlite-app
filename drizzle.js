import { drizzle } from 'drizzle-orm/better-sqlite3';
import Database from 'better-sqlite3';
import { users } from './schema.js';
import { eq, lt, gte, ne } from 'drizzle-orm';

const sqlite = new Database('test.db');
const db = drizzle(sqlite);

const result = await db.select().from(users);
console.log(result)

const user = await db.select().from(users).where(eq(users.name, "Bob"));
console.log(user)
