import express from 'express';
import ProductInfoController from '../controllers/productInfo.controller.js';

const router = express.Router();

router.post('/', ProductInfoController.createProductInfo);

export default router;
