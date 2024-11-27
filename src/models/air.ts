import pool from "../db";
import { ResultSetHeader, RowDataPacket } from "mysql2/promise";
import { Air } from "../interfaces/air";

// Obtener todos los registros de calidad de aire
export const findAllAirRecords = async (
  limit: number,
  offset: number,
): Promise<{
  page: number;
  limit: number;
  total: number;
  totalPages: number;
  data: Air[];
}> => {
  const [rows] = await pool.query<RowDataPacket[]>(
    "SELECT * FROM air LIMIT ? OFFSET ?",
    [limit, offset],
  );

  const [totalRows] = (await pool.query(
    "SELECT COUNT(*) as count FROM air",
  )) as [{ count: number }[], unknown];
  const total = totalRows[0].count;
  const totalPages = Math.ceil(total / limit);

  return {
    page: offset / limit + 1,
    limit,
    total,
    totalPages,
    data: rows as Air[],
  };
};

// Insertar un nuevo registro de calidad de aire
export const insertAirRecord = async (air: Air): Promise<Air> => {
  const { sensor_id, co2_level } = air; // Eliminado el campo timestamp
  const [result] = await pool.query<ResultSetHeader>(
    `INSERT INTO air (sensor_id, CO2_level) 
     VALUES (?, ?)`, // Eliminado el campo timestamp
    [sensor_id, co2_level], // Eliminado el valor timestamp
  );
  const { insertId } = result;
  return { id: insertId, ...air };
};

// Actualizar un registro de calidad de aire existente
export const updateAirRecord = async (id: number, air: Air): Promise<Air> => {
  const { sensor_id, co2_level } = air; // Eliminado el campo timestamp
  await pool.query<ResultSetHeader>(
    `UPDATE air
     SET sensor_id = ?, 
         CO2_level = ? 
     WHERE id = ?;`, // Eliminado el campo timestamp
    [sensor_id, co2_level, id], // Eliminado el valor timestamp
  );

  return { id, ...air };
};

// Eliminar un registro de calidad de aire
export const deleteAirRecord = async (id: number): Promise<number> => {
  await pool.query<ResultSetHeader>(`DELETE FROM air WHERE id = ?`, [id]);
  return id;
};
