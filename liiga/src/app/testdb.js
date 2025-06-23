import pool from './backend/db.js';

async function createTable() {
  const createTableQuery = `
    CREATE TABLE IF NOT EXISTS test_table (
      id SERIAL PRIMARY KEY,
      name VARCHAR(100) NOT NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
  `;
  try {
    await pool.query(createTableQuery);
    console.log('Table "test_table" created or already exists.');
    process.exit(0);
  } catch (err) {
    console.error('Failed to create table:', err);
    process.exit(1);
  }
}

createTable();