import express from 'express';
import productInfoController from '../controllers/productInfo.controller.js';

const router = express.Router();

router.post('/', productInfoController.createProductInfo);
router.get('/', productInfoController.getProductsInfo);
router.get('/:cod_product', productInfoController.getProductInfo);
router.patch('/', productInfoController.updateProductInfo);

router.post('/review', productInfoController.createReview);

export default router;
