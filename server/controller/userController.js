import asyncHandler from "express-async-handler";
import user from "../models/userModel.js";
import generateToken from "../utils/genToken.js"

// @desc Auth user/set token
// @route POST api/users/auth
// @access public
 
const authUser = asyncHandler(async (req, res) => {

    let passwordsMatch;
    const {email, password} = req.body;

    const foundUser = await user.findOne({email})

    if(foundUser){
        passwordsMatch = await foundUser.matchPassword(password); // used to check the password of the current user we found from the db
    } 

    if(foundUser && passwordsMatch) {
        generateToken(res, foundUser._id); // fetched from utils folder
        res.status(200).json({
            _id: foundUser._id,
            name: foundUser.name,
            email: foundUser.email
        });

    }
    else{
        res.status(404);
        throw new Error('Invalid Credentials')
    }

});

// @desc Register a new user
// @route POST api/users
// @access public

const registerUser = asyncHandler(async (req, res) => {
    let createdUser;
    const {name, email, password} = req.body;
   
    const userExists =  await  user.findOne({email});
    
    if(userExists) {
        res.status(400)
        throw new Error('user already exists')
    }
    else{
        createdUser = await user.create({name, email, password});
    }

    if(createdUser != undefined){
        generateToken(res, createdUser._id);
        res.status(201).json({
            _id: createdUser._id,
            name: createdUser.name,
            email: createdUser.email
        });

    }
    else{
        res.status(404);
        throw new Error('invalid user data')
    }
    
});

// @desc Logout a new user
// @route POST api/users/logout
// @access public

const logoutUser = asyncHandler(async (req, res) => {

    res.cookie('jwt', '', {
        httpOnly: true,
        expires: new Date(0)
    })

    res.status(200).json({ message: 'User Logged Out' });
});

// @desc get a user
// @route POST api/users/profile
// @access PRIVATE (cant be accessed without auth)

const getUser = asyncHandler(async (req, res) => {
    const user = {
        _id: req.user._id,
        name: req.user.name,
        email: req.user.email
    }

    res.status(200).json(user);
});
// @desc Update a user
// @route PUT api/users/profile
// @access PRIVATE (cant be accessed without auth)

const updateUser = asyncHandler(async (req, res) => {

    let updatedUser;
    const foundUser = await user.findById(req.user._id);

    if(user){
        foundUser.name = req.body.name || foundUser.name;
        foundUser.email = req.body.email || foundUser.email;

        if(req.body.password){
            foundUser.password = req.body.password;
        }

        updatedUser = await foundUser.save();
    }else{
        res.status(404);
        throw new Error("user not found");
    }

    res.status(200).json({
        _id: updatedUser._id,
        name: updatedUser.name,
        email: updatedUser.email,
    });
});


export {
    authUser,
    registerUser,
    logoutUser,
    getUser,
    updateUser
};
