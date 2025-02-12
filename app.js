import express from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';

import user from './routes/user.js';


import dotenv from 'dotenv';
dotenv.config();

const PORT = process.env.PORT || 3000;

const app = express()
  .use(bodyParser.json())
  .use(cookieParser(process.env.COOKIE_SECRET));

app.use('/user', user);



app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
