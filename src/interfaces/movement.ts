// Tipo para representar un Movimiento
export interface Movement {
  id?: number;
  sensor_id: number;
  timestamp: string; // Fecha y hora del registro
  detected: boolean; // Indica si se detectó movimiento
}
