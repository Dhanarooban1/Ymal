import express from 'express';
import { createUserInfo, getAllUserInfo } from '../controllers/userController.js';

const router = express.Router();

// Route to create new user info
router.post('/', createUserInfo);

// Route to get all users info
router.get('/', getAllUserInfo);

export default router;
