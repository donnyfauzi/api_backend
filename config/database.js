require("dotenv").config(); // Load variabel dari .env
const { Pool } = require("pg");

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

// Pengecekan koneksi
pool.connect((err, client, release) => {
  if (err) {
    console.error("Error connecting to the database:", err.stack);
    return;
  }
  console.log("Database PostgreSQL terhubung!");
  release(); // Melepaskan koneksi
});

// Ekspor pool untuk digunakan di bagian lain proyek
module.exports = pool;
