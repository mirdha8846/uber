import { Router } from 'express';
import { body } from 'express-validator';
import { register,login, getUserProfile, logout } from '../controllers/user.controller.js';
import { authUser } from '../middlewares/auth.middleware.js';
const router = Router();
router.post('/register',[
    body('email').isEmail().withMessage('Please enter a valid email address'),
    body('password').isLength({ min: 6 }).withMessage('Password must be atleast 6 characters'),
    body('fullname.firstname').isLength({ min: 3 }).withMessage('First name must be atleast 3 characters'),
], register );

router.post('/login',[
    body('email').isEmail().withMessage('Please enter a valid email address'),
    body('password').isLength({ min: 6 }).withMessage('Password must be atleast 6 characters'),
], login );

router.get('/profile', authUser,getUserProfile);
router.get('/logout', authUser,logout);






export default router;