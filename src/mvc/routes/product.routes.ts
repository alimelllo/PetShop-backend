import express from 'express';
import { productController } from '../controllers';
import { Routes } from './routesStrings';

const router = express.Router();

router.get(Routes.getAllProducts, productController.ProductsList);
router.get(Routes.getAllProductIds, productController.getAllProductIds);
router.get(Routes.getAllProductGroups, productController.ProductsGroupsList);
router.get(Routes.GetAllProductImages, productController.GetAllProductImages);
router.get(Routes.getProductById, productController.getProductById);

router.post(Routes.AddProduct, productController.AddProduct);
router.post(Routes.AddProductGroup , productController.AddProductGroup );
router.post(Routes.AddProductImage, productController.AddProductImage);


export default router;
