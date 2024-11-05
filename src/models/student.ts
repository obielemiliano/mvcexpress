import pool from "../db";
import { ResultSetHeader, RowDataPacket } from "mysql2/promise";
import { PaginatedStudent, Student } from "../interfaces/student";

// Obtener todos los alumnos
export const findAllStudents = async (
  limit: number,
  offset: number,
): Promise<PaginatedStudent> => {
  const [rows] = await pool.query<RowDataPacket[]>(
    "SELECT * FROM students LIMIT ? OFFSET ?", 
    [limit, offset],
  );

  // Consulta para obtener el total de registros
const [totalRows] = (await pool.query(
  "SELECT COUNT(*) as count FROM students",
  )) as [{ count: number }[], unknown];
  const total = totalRows[0].count;

  // Calcular el total de páginas
  const totalPages = Math.ceil(total / limit);

  return {
    page: offset / limit + 1,
    limit,
    total,
    totalPages,
    data: rows as Student[],
  };
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

export const updateStudent = async (
  id: number,
  student: Student,
): Promise<Student> => {
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
  await pool.query<ResultSetHeader>(
    `UPDATE students
     SET first_name = ?, 
         last_name = ?, 
         date_of_birth = ?, 
         email = ?, 
         address = ?, 
         phone = ?, 
         gender = ?, 
         grade_level = ?
     WHERE id = ?;`,
    [
      first_name,
      last_name,
      date_of_birth,
      email,
      address,
      phone,
      gender,
      grade_level,
      id,
    ],
  );

  return { id, ...student };
};

export const deleteStudent = async (id: number): Promise<number> => {
  await pool.query<ResultSetHeader>(
    `DELETE FROM students WHERE id =
    ?`,
    [id],
  );
  return id;
};