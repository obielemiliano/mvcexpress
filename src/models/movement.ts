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

export const insertMovement = async (movement: Movement): Promise<Movement> => {
  const { sensor_id, detected, timestamp } = movement;
  const [result] = await pool.query<ResultSetHeader>(
    `INSERT INTO movements (sensor_id, detected, timestamp) 
     VALUES (?, ?, ?)`,
    [sensor_id, detected, timestamp],
  );
  const { insertId } = result;
  return { id: insertId, ...movement };
};

export const updateMovement = async (
  id: number,
  movement: Movement,
): Promise<Movement> => {
  const { sensor_id, detected, timestamp } = movement;
  await pool.query<ResultSetHeader>(
    `UPDATE movements
     SET sensor_id = ?, 
         detected = ?, 
         timestamp = ?
     WHERE id = ?;`,
    [sensor_id, detected, timestamp, id],
  );

  return { id, ...movement };
};

export const deleteMovement = async (id: number): Promise<number> => {
  await pool.query<ResultSetHeader>(`DELETE FROM movements WHERE id = ?`, [id]);
  return id;
};
