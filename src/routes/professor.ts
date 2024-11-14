import { Router } from "express";
import {
  createProfessor,
  deleteProfessor,
  getProfessors,
  updateProfessor,
} from "../controllers/professor";
import validate from "../middlewares/validate";
import { professorSchema } from "../schemas/professor";

const router = Router();

// Ruta para obtener todos los profesores
router.get("/", getProfessors);

// Ruta para crear un nuevo profesor
router.post("/", validate(professorSchema), createProfessor);

// Ruta para actualizar un profesor por ID
router.put("/:id", validate(professorSchema), updateProfessor);

// Ruta para eliminar un profesor por ID
router.delete("/:id", deleteProfessor);

export default router;
