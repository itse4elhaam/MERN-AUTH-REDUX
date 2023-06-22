import express from 'express';
import {
    authUser,
    registerUser,
    logoutUser,
    getUser,
    updateUser } from '../controller/userController.js';
// have to write .js always as we are using modules in the pckg
const router = express.Router();

import { protect } from "../middleware/authMiddleware.js" ;


router.post('/', registerUser);
router.post('/auth', authUser);
router.route('/profile').get(protect, getUser).put(protect, updateUser)
router.post('/logout', logoutUser);

export default router;