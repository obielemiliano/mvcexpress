import { Movement } from "../interfaces/movement";
import {
  deleteMovement,
  findAllMovements,
  insertMovement,
  updateMovement,
} from "../models/movement";

// Obtener todos los registros de movimiento
export const findAllMovementsService = async (
  limit: number,
  offset: number,
) => {
  return await findAllMovements(limit, offset);
};

// Insertar un registro de movimiento
export const insertMovementService = async (movement: Movement) => {
  return await insertMovement(movement);
};

// Actualizar un registro de movimiento
export const updateMovementService = async (id: number, movement: Movement) => {
  return await updateMovement(id, movement);
};

// Eliminar un registro de movimiento por ID
export const deleteMovementByIdService = async (id: number) => {
  return await deleteMovement(id);
};
