import { z } from "zod";

export const studentSchema = z.object({
  first_name: z
    .string()
    .min(2, { message: "El nombre debe tener al menos 2 caracteres" }),
  last_name: z
    .string()
    .min(2, { message: "El apellido debe tener al menos 2 caracteres" }),
  date_of_birth: z
    .string()
    .regex(/^\d{4}-\d{2}-\d{2}$/, {
      message: "El formato de la fecha debe ser YYYY-MM-DD",
    })
    .refine(
      (date) => {
        // Verificar si la fecha es válida
        const parsedDate = Date.parse(date);
        return !isNaN(parsedDate);
      },
      { message: "Fecha de nacimiento inválida" },
    ),
  email: z.string().email({ message: "Debe ser un email válido" }),
  address: z
    .string()
    .regex(/^[A-Za-z\s]+ \d+, [A-Za-z\s]+$/, {
      message: "El formato de la dirección debe ser 'Road Number, City'",
    })
    .refine(
      (direccion) => {
        // Opcional: Validar que el número sea válido
        const numero = direccion.split(" ")[1].replace(",", "");
        return !isNaN(Number(numero));
      },
      { message: "El número de la dirección debe ser válido" },
    )
    .optional(),
  phone: z
    .string()
    .regex(/^\d{3}-\d{4}$/, {
      message: "El formato del teléfono debe ser '555-1234'",
    })
    .optional(),
  gender: z.enum(["M", "F", "Other"], {
    errorMap: () => ({
      message: "El campo gender debe ser 'M', 'F' u 'Other'",
    }),
  }),
  grade_level: z
    .string()
    .regex(/^\d+°$/, {
      message:
        "El formato de grade_level debe ser 'Número°' (por ejemplo, '10°')",
    })
    .refine(
      (grade) => {
        // Opcional: Validar que el número esté dentro de un rango específico, por ejemplo, 1° a 12°
        const numero = parseInt(grade.slice(0, -1), 10);
        return numero >= 1 && numero <= 12;
      },
      { message: "El número de grade_level debe estar entre 1° y 12°" },
    ),
});
