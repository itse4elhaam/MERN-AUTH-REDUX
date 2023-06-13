import express from 'express';
import { authUser } from '../controller/userController.js'; //have to write .js always as we are using modules in the pckg
const router = express.Router();

router.post('/auth', authUser);


export default router;