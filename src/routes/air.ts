import { Router } from "express";
import {
  getAirRecords,
  createAirRecord,
  updateAirRecord,
  deleteAirRecord,
} from "../controllers/air";

const router = Router();

// Obtener todos los registros de calidad de aire
router.get("/", getAirRecords);

// Crear un nuevo registro de calidad de aire
router.post("/", createAirRecord);

// Actualizar un registro de calidad de aire por ID
router.put("/:id", updateAirRecord);

// Eliminar un registro de calidad de aire por ID
router.delete("/:id", deleteAirRecord);

export default router;
