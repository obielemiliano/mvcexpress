import { NextFunction, Request, Response } from "express";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const unknownResource = (req: Request, res: Response, next: NextFunction) => {
  res.status(404).json({
    status: 404,
    error: "No encontrado",
    message: `La ruta ${req.originalUrl} no existe en el servidor.`,
  });
  console.error(`Recurso no encontrado: ${req.originalUrl}`);
};

export default unknownResource;
