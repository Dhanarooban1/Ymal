import express from 'express';
import { createUserInfo, getAllUserInfo ,checkUserInfoExists} from '../controllers/userController.js';

const router = express.Router();

// Route to create new user info
router.post('/', createUserInfo);

// Route to get all users info
router.get('/', getAllUserInfo);

router.get('/check', checkUserInfoExists);
export default router;
