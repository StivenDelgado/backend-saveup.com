import pg from 'pg'
import dotenv from 'dotenv';
dotenv.config();

const { Client } = pg
 
export const client = new Client({
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  port: 5432,
  database: process.env.DB_NAME,
  ssl: { rejectUnauthorized: false } // Habilita SSL
})


