import jwt from 'jsonwebtoken';


const generateToken = (res, userId) => {
    const token = jwt.sign({userId}, process.env.JWT_SECRET, {
        expiresIn: '1d'
    });

    res.cookie('jwt', token,{
        httpOnly: true,
        secure: process.env.NODE_ENV != "development", // tells whether we want https or not, but we will ony use it in production hence the check
        sameSite: 'strict',
        maxAge: 86400 // same as the `expiresIn`
    });   
}


export default generateToken;