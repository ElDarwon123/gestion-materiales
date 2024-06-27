import Router from "express";
import { createRole, deleteRole, getRoleById, getRoles, updateRole } from "../controllers/role.controller.js";

const router = Router();

router.get('/', getRoles);
router.get('/:id', getRoleById);
router.post('/create', createRole);
router.patch('/:id', updateRole);
router.delete('/:id', deleteRole)

export default router;
