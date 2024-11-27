import { z } from "zod";

export const airSchema = z.object({
  co2_level: z
    .number()
    .min(0, { message: "El nivel de CO2 debe ser mayor o igual a 0" }),
});
