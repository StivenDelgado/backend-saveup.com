import express from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import cors from 'cors';  // Add this import
import user from './routes/user.js';
import ia from './routes/ia.js';
import expense from './routes/expense.js';
import income from './routes/income.js';
import finance from './routes/finance.js';
import goal from './routes/goals.js';
import dotenv from 'dotenv';

dotenv.config();

const PORT = process.env.PORT || 3000;

const app = express()
  .use(cors({
    origin: '*',  // Allows all origins
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
  }))
  .use(bodyParser.json())
  .use(cookieParser(process.env.COOKIE_SECRET));

app.use('/user', user);
app.use('/api/ia', ia);
app.use('/expense', expense);
app.use('/income', income);
app.use('/finance', finance);
app.use('/goals', goal)

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
