import express from 'express';
import { productController } from '../controllers';
import { Routes } from './routesStrings';

const router = express.Router();

router.get(Routes.getAllProducts, productController.ProductsList);

export default router;
