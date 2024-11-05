import { Request, Response } from "express";

import { deleteById, findAll, insert, update } from "../services/student";
import { Student } from "../interfaces/student";

// Obtener todos los alumnos
export const getStudents = async (req: Request, res: Response) => {
  try {
    // Obtener parámetros de paginación con valores por defecto
    const page = parseInt(req.query.page as string) || 1;
    const limit = parseInt(req.query.limit as string) || 5;

    // Calcular offset
    const offset = (page - 1) * limit;

    const students = await findAll(limit, offset);
    res.status(200).json(students);
  } catch (error) {
    res.status(500).json({ mensaje: "Error al obtener alumnos", error });
  }
};

export const createStudent = async (req: Request, res: Response) => {
  try {
    const student: Student = req.body;
    await insert(student);
    res.status(201).json({ message: "Alumno creado exitosamente" });
  } catch (error) {
    res.status(400).json({ message: "Error al crear alumno", error });
  }
};

export const updateStudent = async (req: Request, res: Response) => {
  try {
    const id = Number.parseInt(req.params.id);
    const student: Student = req.body;
    await update(id, student);
    res.status(201).json({ message: "Alumno actualizado exitosamente" });
  } catch (error) {
    res.status(400).json({ message: "Error al actualizar el alumno", error });
  }
};

export const deleteStudent = async (req: Request, res: Response) => {
  try {
    const id = Number.parseInt(req.params.id);
    await deleteById(id);
    res.status(201).json({ message: "Alumno eliminado exitosamente" });
  } catch (error) {
    res.status(400).json({ message: "Error al eliminar el alumno", error });
  }
};
