import { Router } from "express";
import { createMaterial, deleteMaterial, getMaterialById, getMaterials, updateMaterial } from "../controllers/material.controller.js";

const router = Router()

router.get('/material', getMaterials)
router.get('/material/:id', getMaterialById)
router.post('/material', createMaterial)
router.put('/material/:id', updateMaterial)
router.delete('/material/:id', deleteMaterial)

export default router