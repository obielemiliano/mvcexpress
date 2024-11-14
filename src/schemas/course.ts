import { z } from "zod";

export const courseSchema = z.object({
  course_name: z.string().min(3, {
    message: "El nombre del curso debe tener al menos 3 caracteres",
  }),
  credits: z
    .number()
    .int()
    .min(1, { message: "Los créditos deben ser al menos 1" })
    .max(5, { message: "Los créditos no pueden exceder de 5" }),
  description: z
    .string()
    .min(10, { message: "La descripción debe tener al menos 10 caracteres" })
    .max(200, { message: "La descripción no debe exceder de 200 caracteres" }),
  teacher_id: z
    .number()
    .int()
    .positive({ message: "El ID del profesor debe ser un número positivo" }),
});
