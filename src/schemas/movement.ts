import { z } from "zod";

export const movementSchema = z.object({
  sensor_id: z
    .number()
    .int()
    .positive({ message: "El ID del sensor debe ser un número positivo" }),
  detected: z.boolean({
    message: "El valor de detección debe ser verdadero o falso",
  }),
});
