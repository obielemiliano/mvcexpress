// Tipo para representar un Movimiento
export interface Movement {
  id?: number;
  timestamp: string; // Fecha y hora del registro
  detected: boolean; // Indica si se detectó movimiento
}
