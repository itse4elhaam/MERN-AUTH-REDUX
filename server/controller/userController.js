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
    res.status(200).json({ message: 'Register User' });
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
