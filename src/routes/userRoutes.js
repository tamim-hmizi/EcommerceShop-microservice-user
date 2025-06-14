import express from 'express';
import {
  registerUser,
  authUser,
  getUserProfile,
} from '../controllers/userController.js';


const router = express.Router();

router.post('/register', registerUser);
router.post('/login', authUser);
router.get('/profile', getUserProfile);

export default router;
