import Database from 'better-sqlite3';
import { join } from 'path';

// This creates a physical local file called sqlite.db in your project root
const dbPath = join(process.cwd(), 'sqlite.db');
const db = new Database(dbPath);

// Create a users table if it doesn't exist yet
db.exec(`
  CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT UNIQUE, 
    password TEXT
  )
`);

// Seed a default user if the table is empty (username: admin, password: password123)
const row = db.prepare('SELECT COUNT(*) as count FROM users').get() as { count: number };
if (row.count === 0) {
  const insert = db.prepare('INSERT INTO users (username, password) VALUES (?, ?)');
  insert.run('admin', 'password123'); // Plain text for demo simplicity!
}

export { db };