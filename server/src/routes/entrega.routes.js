import express from 'express';
import { createEntrega, getEntregas, getEntregaById, updateEntrega, deleteEntrega } from '../controllers/entrega.controller.js';

const router = express.Router();

router.post('/entrega', createEntrega);
router.get('/entrega', getEntregas);
router.get('/entrega/:id', getEntregaById);
router.put('/entrega/:id', updateEntrega);
router.delete('/entrega/:id', deleteEntrega);

export default router;
