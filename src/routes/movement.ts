import { Router } from "express";
import {
  getMovements,
  createMovement,
  updateMovement,
  deleteMovement,
} from "../controllers/movement";

const router = Router();

// Obtener todos los registros de movimiento
router.get("/", getMovements);

// Crear un nuevo registro de movimiento
router.post("/", createMovement);

// Actualizar un registro de movimiento por ID
router.put("/:id", updateMovement);

// Eliminar un registro de movimiento por ID
router.delete("/:id", deleteMovement);

export default router;
