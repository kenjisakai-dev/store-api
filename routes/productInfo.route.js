import express from 'express';
import ProductInfoController from '../controllers/productInfo.controller.js';

const router = express.Router();

router.post('/', ProductInfoController.createProductInfo);
router.put('/', ProductInfoController.updateProductInfo);
router.get('/:id', ProductInfoController.getProductInfo);
router.delete('/:id', ProductInfoController.deleteProductInfo);
router.post('/review', ProductInfoController.createReview);
router.delete('/review/:id/:index', ProductInfoController.deleteReview);

export default router;
