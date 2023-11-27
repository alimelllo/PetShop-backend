import express from 'express';
import { factorController } from '../controllers';
import { Routes } from './routesStrings';

const router = express.Router();

router.post(Routes.CreateFactor, factorController.CreateFactor);
router.post(Routes.Payment, factorController.Payment);
router.get(Routes.getAllFactorIds, factorController.getAllFactorIds);
router.get(Routes.getFactorById, factorController.getFactorById);

export default router;
