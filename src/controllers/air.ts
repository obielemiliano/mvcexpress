import { Request, Response } from "express";
import {
  deleteAirRecordByIdService,
  findAllAirRecordsService,
  insertAirRecordService,
  updateAirRecordService,
} from "../services/air";
import { Air } from "../interfaces/air";

// Obtener todos los registros de calidad de aire
export const getAirRecords = async (req: Request, res: Response) => {
  try {
    const page = parseInt(req.query.page as string) || 1;
    const limit = parseInt(req.query.limit as string) || 5;
    const offset = (page - 1) * limit;

    const airRecords = await findAllAirRecordsService(limit, offset);
    res.status(200).json(airRecords);
  } catch (error) {
    res.status(500).json({
      message: "Error al obtener registros de calidad de aire",
      error,
    });
  }
};

// Crear un nuevo registro de calidad de aire
export const createAirRecord = async (req: Request, res: Response) => {
  try {
    const air: Air = req.body;
    const newAirRecord = await insertAirRecordService(air);

    const io = req.app.get("io");
    io.emit("newAirRecordData", newAirRecord);
    res
      .status(201)
      .json({ message: "Registro de calidad de aire creado exitosamente" });
  } catch (error) {
    res
      .status(400)
      .json({ message: "Error al crear registro de calidad de aire", error });
  }
};

// Actualizar un registro de calidad de aire por ID
export const updateAirRecord = async (req: Request, res: Response) => {
  try {
    const id = Number.parseInt(req.params.id);
    const air: Air = req.body;
    await updateAirRecordService(id, air);
    res.status(201).json({
      message: "Registro de calidad de aire actualizado exitosamente",
    });
  } catch (error) {
    res.status(400).json({
      message: "Error al actualizar el registro de calidad de aire",
      error,
    });
  }
};

// Eliminar un registro de calidad de aire por ID
export const deleteAirRecord = async (req: Request, res: Response) => {
  try {
    const id = Number.parseInt(req.params.id);
    await deleteAirRecordByIdService(id);
    res
      .status(201)
      .json({ message: "Registro de calidad de aire eliminado exitosamente" });
  } catch (error) {
    res.status(400).json({
      message: "Error al eliminar el registro de calidad de aire",
      error,
    });
  }
};
