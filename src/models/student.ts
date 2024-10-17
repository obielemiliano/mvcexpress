import pool from "../db";
import { ResultSetHeader, RowDataPacket } from "mysql2/promise";
import { Student } from "../interfaces/student";

// Obtener todos los alumnos
export const findAllStudents = async (): Promise<Student[]> => {
  const [rows] = await pool.query<RowDataPacket[]>("SELECT * FROM alumnos");
  return rows as Student[];
};

export const insertStudent = async (student: Student): Promise<Student> => {
  const {
    first_name,
    last_name,
    date_of_birth,
    email,
    address,
    phone,
    gender,
    grade_level,
  } = student;
  const [result] = await pool.query<ResultSetHeader>(
    `INSERT INTO students (first_name, last_name, date_of_birth, email, address, phone, gender, grade_level) 
     VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
    [
      first_name,
      last_name,
      date_of_birth,
      email,
      address,
      phone,
      gender,
      grade_level,
    ],
  );
  const { insertId } = result;
  return { id: insertId, ...student };
};