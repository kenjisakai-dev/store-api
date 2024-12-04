import express from 'express';
import supplierController from '../controllers/supplier.controller.js';

const router = express.Router();

router.post('/', supplierController.createSupplier);
router.get('/', supplierController.getSuppliers);
router.get('/:cod_supplier', supplierController.getSupplier);
router.patch('/', supplierController.updateSupplier);

export default router;
