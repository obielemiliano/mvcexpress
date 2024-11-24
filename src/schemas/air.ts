import { z } from "zod";

export const airSchema = z.object({
  co2_level: z
    .number()
    .min(0, { message: "El nivel de CO2 debe ser mayor o igual a 0" }),
  timestamp: z.string().refine((val) => !isNaN(Date.parse(val)), {
    message: "El formato de fecha y hora es inválido",
  }),
  sensor_id: z
    .number()
    .int()
    .positive({ message: "El ID del sensor debe ser un número positivo" }),
});
