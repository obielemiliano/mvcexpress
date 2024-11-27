import pool from "../db";
import { ResultSetHeader, RowDataPacket } from "mysql2/promise";
import { Movement } from "../interfaces/movement";

// Obtener todos los registros de movimiento
export const findAllMovements = async (
  limit: number,
  offset: number,
): Promise<{
  page: number;
  limit: number;
  total: number;
  totalPages: number;
  data: Movement[];
}> => {
  const [rows] = await pool.query<RowDataPacket[]>(
    "SELECT * FROM movements LIMIT ? OFFSET ?",
    [limit, offset],
  );

  const [totalRows] = (await pool.query(
    "SELECT COUNT(*) as count FROM movements",
  )) as [{ count: number }[], unknown];
  const total = totalRows[0].count;
  const totalPages = Math.ceil(total / limit);

  return {
    page: offset / limit + 1,
    limit,
    total,
    totalPages,
    data: rows as Movement[],
  };
};

// Insertar un nuevo registro de movimiento
export const insertMovement = async (movement: Movement): Promise<Movement> => {
  const { sensor_id, detected } = movement; // Eliminado el campo timestamp
  const [result] = await pool.query<ResultSetHeader>(
    `INSERT INTO movements (sensor_id, detected) 
     VALUES (?, ?)`, // Eliminado el campo timestamp
    [sensor_id, detected], // Eliminado el valor timestamp
  );
  const { insertId } = result;
  return { id: insertId, ...movement };
};

// Actualizar un registro de movimiento existente
export const updateMovement = async (
  id: number,
  movement: Movement,
): Promise<Movement> => {
  const { sensor_id, detected } = movement; // Eliminado el campo timestamp
  await pool.query<ResultSetHeader>(
    `UPDATE movements
     SET sensor_id = ?, 
         detected = ?
     WHERE id = ?;`, // Eliminado el campo timestamp
    [sensor_id, detected, id], // Eliminado el valor timestamp
  );

  return { id, ...movement };
};

// Eliminar un registro de movimiento
export const deleteMovement = async (id: number): Promise<number> => {
  await pool.query<ResultSetHeader>(`DELETE FROM movements WHERE id = ?`, [id]);
  return id;
};
