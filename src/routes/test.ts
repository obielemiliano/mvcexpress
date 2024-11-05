// src/routes/testRoutes.ts
import { Router, Request, Response, NextFunction } from "express";

const router = Router();

// Ruta que lanza un error
router.get("/", (req: Request, res: Response, next: NextFunction) => {
  // Crear un error y pasarlo al siguiente middleware de errores
  const error = new Error("Error de prueba");
  next(error);
});

export default router;
