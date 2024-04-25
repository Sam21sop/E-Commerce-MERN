import jwt from 'jsonwebtoken';
import expressAsyncHandler from 'express-async-handler';
import userModel from '../models/userModel.js';
import configEnvVar from '../utility/configEnvVariables.js';


const isAutherizedUser = expressAsyncHandler ( async (req, res, next)=>{
    let token;
    token = req.cookies.jwt;

    // check if token present in cookie
    if (token) {
        try {
            const decoded = jwt.verify(token, configEnvVar.JWT_SECRET);
            req.user = await userModel.findById(decoded.userId).select('-password')
        } catch (error) {
            res.status(401);
            throw new Error('Invalid token');
        }
    } else {
        res.status(401);
        throw new Error("User not authorized");
    }
});


export {
    isAutherizedUser,
};