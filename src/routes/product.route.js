import express from 'express';
import productController from '../controllers/product.controller.js';

const router = express.Router();

router.post('/', productController.createProduct);
router.get('/', productController.getProducts);
router.get('/:cod_product', productController.getProduct);
router.patch('/', productController.updateProduct);

export default router;
