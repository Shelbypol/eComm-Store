import jwt from 'jsonwebtoken'
import asyncHandler from 'express-async-handler'
import User from '../models/userModel.js'

// let to initialize
const protect = asyncHandler(async (req, res, next) => {
  let token;

    // if correct token returns user's id, issued at time, and expiration info
    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
        try{
            token = req.headers.authorization.split(' ')[1];
            const decoded = jwt.verify(token, process.env.JWT_SECRET);

            // find by id return user id minus password
            req.user = await User.findById(decoded.id).select('-password');
            next()
        } catch(error){
            console.log(error);
            res.status(401);
            throw new Error('Not authorized, token failed')
        }
    }

    if (!token){
        res.status(401);
        throw new Error('Not authorized, no token')
    }
});

const admin = (req, res, next) => {
    if(req.user && req.user.isAdmin){
        next()
    }else{
        res.status(401)
        throw new Error('Not authorized as an admin')
    }
};

export { protect, admin }