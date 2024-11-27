import { z } from "zod";

export const movementSchema = z.object({
  detected: z.boolean({
    message: "El valor de detección debe ser verdadero o falso",
  }),
});
