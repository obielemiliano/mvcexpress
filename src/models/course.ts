import pool from "../db";
import { ResultSetHeader, RowDataPacket } from "mysql2/promise";
import { Course } from "../interfaces/course";

// Obtener todos los cursos
export const findAllCourses = async (
  limit: number,
  offset: number,
): Promise<{
  page: number;
  limit: number;
  total: number;
  totalPages: number;
  data: Course[];
}> => {
  const [rows] = await pool.query<RowDataPacket[]>(
    "SELECT * FROM courses LIMIT ? OFFSET ?",
    [limit, offset],
  );

  const [totalRows] = (await pool.query(
    "SELECT COUNT(*) as count FROM courses",
  )) as [{ count: number }[], unknown];
  const total = totalRows[0].count;
  const totalPages = Math.ceil(total / limit);

  return {
    page: offset / limit + 1,
    limit,
    total,
    totalPages,
    data: rows as Course[],
  };
};

export const insertCourse = async (course: Course): Promise<Course> => {
  const { course_name, credits, description, teacher_id } = course;
  const [result] = await pool.query<ResultSetHeader>(
    `INSERT INTO courses (course_name, credits, description, teacher_id) 
     VALUES (?, ?, ?, ?)`,
    [course_name, credits, description, teacher_id],
  );
  const { insertId } = result;
  return { id: insertId, ...course };
};

export const updateCourse = async (
  id: number,
  course: Course,
): Promise<Course> => {
  const { course_name, credits, description, teacher_id } = course;
  await pool.query<ResultSetHeader>(
    `UPDATE courses
     SET course_name = ?, 
         credits = ?, 
         description = ?, 
         teacher_id = ?
     WHERE id = ?;`,
    [course_name, credits, description, teacher_id, id],
  );

  return { id, ...course };
};

export const deleteCourse = async (id: number): Promise<number> => {
  await pool.query<ResultSetHeader>(`DELETE FROM courses WHERE id = ?`, [id]);
  return id;
};
