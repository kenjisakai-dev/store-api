import express from 'express';
import clientController from '../controllers/client.controller.js';

const router = express.Router();

router.post('/', clientController.createClient);
router.get('/', clientController.getClients);
router.get('/:cod_client', clientController.getClient);
router.patch('/', clientController.updateClient);

export default router;
