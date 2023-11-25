import express from 'express';
import { userController } from '../controllers';
import { auth, userAuth } from '../middlewares';
import { Routes } from './routesStrings';

const router = express.Router();

// router.get(Routes.profile, [auth, userAuth], userController.UserProfile);
router.post(Routes.getUserInfo, userController.currentUserInfo);

export default router;
