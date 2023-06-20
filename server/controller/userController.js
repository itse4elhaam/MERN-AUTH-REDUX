import asyncHandler from "express-async-handler";
import user from "../models/userModel.js";

// @desc Auth user/set token
// @route POST api/users/auth
// @access public
 
const authUser = asyncHandler(async (req, res) => {
    res.status(200).json({ message: 'Auth User' });
});

// @desc Register a new user
// @route POST api/users
// @access public

const registerUser = asyncHandler(async (req, res) => {
    console.log(req.body);
    const {name, email, password} = req.body;
   
    const userExists =  await  User.findOne({email});
    
    if(userExists) {
        res.status(400)
        throw new Error('user already exists')
    }
    else{
        const user = await User.create({name, user, password})
    }

    if(user){
        res.status(201).json({
            _id: user.id,
            name: user.name,
            email: user.email
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
    res.status(200).json({ message: 'Logout User' });
});

// @desc get a user
// @route POST api/users/profile
// @access PRIVATE (cant be accessed without auth)

const getUser = asyncHandler(async (req, res) => {
    res.status(200).json({ message: 'get User' });
});
// @desc Update a user
// @route PUT api/users/profile
// @access PRIVATE (cant be accessed without auth)

const updateUser = asyncHandler(async (req, res) => {
    res.status(200).json({ message: 'Update User' });
});


export {
    authUser,
    registerUser,
    logoutUser,
    getUser,
    updateUser
};
