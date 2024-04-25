import jwt from 'jsonwebtoken';
import configEnvVar from './configEnvVariables.js';

const generateToken = (res, userId) => {
    const token = jwt.sign({userId}, configEnvVar.JWT_SECRET, {
        expiresIn:'1d'
    });

    res.cookie('jwt', token, {
        httpOnly:true, 
        secure:configEnvVar.NODE_ENV !== 'development',
        sameSite:'strict',
        maxAge: 1 * 24 * 60 * 60 * 1000,
    });
};

export default generateToken;