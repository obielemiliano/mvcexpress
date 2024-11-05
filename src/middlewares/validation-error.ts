import { Request, Response, NextFunction } from "express";
import { ZodError } from "zod";

const validationError = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  if (err instanceof ZodError) {
    // Si el error es de Zod, formatea y envía una respuesta de error de validación
    res.status(400).json({
      status: 400,
      error: "Error de Validación",
      issues: err.errors.map((issue) => ({
        campo: issue.path.join("."),
        mensaje: issue.message,
      })),
    });
  } else {
    // Si el error no es de Zod, pasa al siguiente manejador de errores (puede ser un error 500)
    next(err);
  }
};

export default validationError;
