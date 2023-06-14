import express from 'express';
import {
    authUser,
    registerUser,
    logoutUser,
    getUser,
    updateUser } from '../controller/userController.js'; 
// have to write .js always as we are using modules in the pckg
const router = express.Router();

router.post('/', registerUser);
router.post('/auth', authUser);
router.post('/logout', logoutUser);
router.route('/profile').get(getUser).put(updateUser)

export default router;