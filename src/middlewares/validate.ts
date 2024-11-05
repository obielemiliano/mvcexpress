import { Request, Response, NextFunction } from "express";
import { ZodSchema } from "zod";

const validate =
  (schema: ZodSchema<unknown>) =>
  (req: Request, res: Response, next: NextFunction) => {
    try {
      // Parsear y validar los datos de la solicitud
      schema.parse(req.body);
      next(); // Si la validación es exitosa, pasa al siguiente middleware o ruta
    } catch (error) {
      // Si ocurre un error de validación, pásalo al middleware de errores
      next(error);
    }
  };

export default validate;
