// routes/usuarios.ts
import { Router } from "express";
import { createStudent, getStudents } from "../controllers/student";

const router = Router();

router.post("/", createStudent);

// Regresa todos los alumnos en la base de datos
router.get("/", getStudents);

export default router;