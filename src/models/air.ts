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

export const insertAirRecord = async (air: Air): Promise<Air> => {
  const { sensor_id, co2_level, timestamp } = air;
  const [result] = await pool.query<ResultSetHeader>(
    `INSERT INTO air (sensor_id, CO2_level, timestamp) 
     VALUES (?, ?, ?, ?)`,
    [sensor_id, co2_level, timestamp],
  );
  const { insertId } = result;
  return { id: insertId, ...air };
};

export const updateAirRecord = async (id: number, air: Air): Promise<Air> => {
  const { sensor_id, co2_level, timestamp } = air;
  await pool.query<ResultSetHeader>(
    `UPDATE air
     SET sensor_id = ?, 
         CO2_level = ?,  
         timestamp = ?
     WHERE id = ?;`,
    [sensor_id, co2_level, timestamp, id],
  );

  return { id, ...air };
};

export const deleteAirRecord = async (id: number): Promise<number> => {
  await pool.query<ResultSetHeader>(`DELETE FROM air WHERE id = ?`, [id]);
  return id;
};
