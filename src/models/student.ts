import pool from "../db";
import { RowDataPacket } from "mysql2/promise";
import { Student } from "../interfaces/student";

// Obtener todos los alumnos
export const findAllStudents = async (): Promise<Student[]> => {
  const [rows] = await pool.query<RowDataPacket[]>("SELECT * FROM alumnos");
  return rows as Student[];
};