// Tipo para representar un Alumno
export interface Student {
  id?: number;
  first_name: string;
  last_name: string;
  date_of_birth: string;
  email: string;
  address?: string;
  phone?: string;
  gender: "M" | "F" | "Otro";
  grade_level: string;
}

export interface PaginatedStudent {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
  data: Student[];
}
