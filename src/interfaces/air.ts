// Tipo para representar un Registro de Calidad de Aire
export interface Air {
  id?: number;
  co2_level: number; // Nivel de CO2 en partes por millón (ppm)
  timestamp: string; // Fecha y hora del registro
  sensor_id?: number;
}
