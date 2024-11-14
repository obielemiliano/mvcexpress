import { Course } from "../interfaces/course";
import {
  deleteCourse,
  findAllCourses,
  insertCourse,
  updateCourse,
} from "../models/course";

// Obtener todos los cursos
export const findAll = async (limit: number, offset: number) => {
  return await findAllCourses(limit, offset);
};

export const insert = async (course: Course) => {
  return await insertCourse(course);
};

export const update = async (id: number, course: Course) => {
  return await updateCourse(id, course);
};

export const deleteById = async (id: number) => {
  return await deleteCourse(id);
};
