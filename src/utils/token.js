import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

export const generateAccessToken = (email, id) =>{
    return jwt.sign(
        {email, id},
        process.env.JWT_SECRET,
        { expiresIn: '20s' },
    );
}