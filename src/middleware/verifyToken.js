import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();


const verifyToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ message: 'Token no proporcionado o inválido' });
  }

  const token = authHeader.split(' ')[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.dataToken = decoded;
    next();
  } catch (error) {
    console.error('Error al verificar el token:', error.message);
    res.status(403).json({ message: 'Token inválido o expirado' });
  }
};

export default verifyToken;
