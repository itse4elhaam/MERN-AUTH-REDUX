import jwt from 'jsonwebtoken';
import asyncHandler from 'express-async-handler';
import user from "../models/userModel.js"

const protect = asyncHandler(async (req, res, next) => {
    let token;
 
    token =  req.cookies.jwt;

    if(token){
        try {
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            req.user =  await user.findById(decoded.userId).select('-password');

            next();
        } catch (error) {
            res.status(401);
            throw new Error('note authorization, invalid token')

        }
    }
    else{
        res.status(401);
        throw new Error('note authorization, no token')
    }
})

// didn't do default export because we can have multiple middleware for different routes really
export { protect };