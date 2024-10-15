import { Request, Response } from "express";

import { findAll } from "../services/student";
import { Student } from "../interfaces/student";

// Obtener todos los alumnos
export const getStudents = async (req: Request, res: Response) => {
  try {
    const students = await findAll();
    res.status(200).json(students);
  } catch (error) {
    res.status(400).json({ message: "Error al obtener alumnos", error });
  }
};