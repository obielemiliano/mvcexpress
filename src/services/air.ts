import { Air } from "../interfaces/air";
import {
  deleteAirRecord,
  findAllAirRecords,
  insertAirRecord,
  updateAirRecord,
} from "../models/air";

// Obtener todos los registros de calidad de aire
export const findAllAirRecordsService = async (
  limit: number,
  offset: number,
) => {
  return await findAllAirRecords(limit, offset);
};

// Insertar un registro de calidad de aire
export const insertAirRecordService = async (air: Air) => {
  return await insertAirRecord(air);
};

// Actualizar un registro de calidad de aire
export const updateAirRecordService = async (id: number, air: Air) => {
  return await updateAirRecord(id, air);
};

// Eliminar un registro de calidad de aire por ID
export const deleteAirRecordByIdService = async (id: number) => {
  return await deleteAirRecord(id);
};
