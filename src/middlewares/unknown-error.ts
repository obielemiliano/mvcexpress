import { Request, Response, NextFunction } from "express";

const unknownError = (
  err: Error,
  req: Request,
  res: Response,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  next: NextFunction,
) => {
  console.error(err.stack);
  res.status(500).json({
    status: 500,
    error: "Error del servidor",
    message: "Error interno del servidor",
  });
};

export default unknownError;
