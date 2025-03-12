import express from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import user from './src/routes/user.js';
import ia from './src/routes/ia.js';
import expense from './src/routes/expense.js';
import income from './src/routes/income.js';
import finance from './src/routes/finance.js';
import goal from './src/routes/goals.js';
import dotenv from 'dotenv';

dotenv.config();

const PORT = process.env.PORT || 3000;

const app = express()
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
