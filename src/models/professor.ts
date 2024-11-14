import pool from "../db";
import { ResultSetHeader, RowDataPacket } from "mysql2/promise";
import { Professor } from "../interfaces/professor";

// Obtener todos los profesores
export const findAllProfessors = async (
  limit: number,
  offset: number,
): Promise<{
  page: number;
  limit: number;
  total: number;
  totalPages: number;
  data: Professor[];
}> => {
  const [rows] = await pool.query<RowDataPacket[]>(
    "SELECT * FROM professors LIMIT ? OFFSET ?",
    [limit, offset],
  );

  const [totalRows] = (await pool.query(
    "SELECT COUNT(*) as count FROM professors",
  )) as [{ count: number }[], unknown];
  const total = totalRows[0].count;
  const totalPages = Math.ceil(total / limit);

  return {
    page: offset / limit + 1,
    limit,
    total,
    totalPages,
    data: rows as Professor[],
  };
};

export const insertProfessor = async (
  professor: Professor,
): Promise<Professor> => {
  const { first_name, last_name, department, email, phone } = professor;
  const [result] = await pool.query<ResultSetHeader>(
    `INSERT INTO professors (first_name, last_name, department, email, phone) 
     VALUES (?, ?, ?, ?, ?)`,
    [first_name, last_name, department, email, phone],
  );
  const { insertId } = result;
  return { id: insertId, ...professor };
};

export const updateProfessor = async (
  id: number,
  professor: Professor,
): Promise<Professor> => {
  const { first_name, last_name, department, email, phone } = professor;
  await pool.query<ResultSetHeader>(
    `UPDATE professors
     SET first_name = ?, 
         last_name = ?, 
         department = ?, 
         email = ?, 
         phone = ?
     WHERE id = ?;`,
    [first_name, last_name, department, email, phone, id],
  );

  return { id, ...professor };
};

export const deleteProfessor = async (id: number): Promise<number> => {
  await pool.query<ResultSetHeader>(`DELETE FROM professors WHERE id = ?`, [
    id,
  ]);
  return id;
};
