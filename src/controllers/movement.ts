import { Request, Response } from "express";
import {
  deleteMovementByIdService,
  findAllMovementsService,
  insertMovementService,
  updateMovementService,
} from "../services/movement";
import { Movement } from "../interfaces/movement";

// Obtener todos los registros de movimiento
export const getMovements = async (req: Request, res: Response) => {
  try {
    const page = parseInt(req.query.page as string) || 1;
    const limit = parseInt(req.query.limit as string) || 5;
    const offset = (page - 1) * limit;

    const movements = await findAllMovementsService(limit, offset);
    res.status(200).json(movements);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error al obtener registros de movimiento", error });
  }
};

// Crear un nuevo registro de movimiento
export const createMovement = async (req: Request, res: Response) => {
  try {
    const movement: Movement = req.body;
    const newMovement = await insertMovementService(movement);

    const io = req.app.get("io");
    io.emit("newMovementData", newMovement);
    res
      .status(201)
      .json({ message: "Registro de movimiento creado exitosamente" });
  } catch (error) {
    res
      .status(400)
      .json({ message: "Error al crear registro de movimiento", error });
  }
};

// Actualizar un registro de movimiento por ID
export const updateMovement = async (req: Request, res: Response) => {
  try {
    const id = Number.parseInt(req.params.id);
    const movement: Movement = req.body;
    await updateMovementService(id, movement);
    res
      .status(201)
      .json({ message: "Registro de movimiento actualizado exitosamente" });
  } catch (error) {
    res.status(400).json({
      message: "Error al actualizar el registro de movimiento",
      error,
    });
  }
};

// Eliminar un registro de movimiento por ID
export const deleteMovement = async (req: Request, res: Response) => {
  try {
    const id = Number.parseInt(req.params.id);
    await deleteMovementByIdService(id);
    res
      .status(201)
      .json({ message: "Registro de movimiento eliminado exitosamente" });
  } catch (error) {
    res
      .status(400)
      .json({ message: "Error al eliminar el registro de movimiento", error });
  }
};
