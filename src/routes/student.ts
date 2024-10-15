// routes/usuarios.ts
import { Router } from "express";
import { getStudents } from "../controllers/student";

const router = Router();

// Regresa todos los alumnos en la base de datos
router.get("/", getStudents);

export default router;