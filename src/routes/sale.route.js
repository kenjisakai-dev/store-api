import express from 'express';
import saleController from '../controllers/sale.controller.js';

const router = express.Router();

router.post('/', saleController.createSale);
router.get('/', saleController.getSales);
router.get('/:cod_sale', saleController.getSale);
router.patch('/', saleController.updateSale);

export default router;
