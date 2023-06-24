import express from 'express';
import { productController } from '../controllers';
import { Routes } from './routesStrings';

const router = express.Router();

router.get(Routes.getAllProducts, productController.ProductsList);
router.get(Routes.getAllProductIds, productController.getAllProductIds);
router.post(Routes.AddProduct, productController.AddProduct);

router.post(Routes.AddProductGroup , productController.AddProductGroup );
router.get(Routes.getAllProductGroups, productController.ProductsGroupsList);

export default router;
