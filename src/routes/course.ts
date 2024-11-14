import { Router } from "express";
import {
  createCourse,
  deleteCourse,
  getCourses,
  updateCourse,
} from "../controllers/course";
import validate from "../middlewares/validate";
import { courseSchema } from "../schemas/course";

const router = Router();

// Ruta para obtener todos los cursos
router.get("/", getCourses);

// Ruta para crear un nuevo curso
router.post("/", validate(courseSchema), createCourse);

// Ruta para actualizar un curso por ID
router.put("/:id", validate(courseSchema), updateCourse);

// Ruta para eliminar un curso por ID
router.delete("/:id", deleteCourse);

export default router;
