// routes/usuarios.ts
import { Router } from "express";
import { createStudent, deleteStudent, getStudents, updateStudent } from "../controllers/student";

const router = Router();

router.post("/", createStudent);

router.put("/:id", updateStudent);

router.delete("/:id", deleteStudent);

// Regresa todos los alumnos en la base de datos
router.get("/", getStudents);

export default router;
