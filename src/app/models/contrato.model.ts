export interface Contrato {
  id?: number; // Opcional porque es generado por el backend
  identificador: string;
  valor: number;
  nombreContratante: string;
  documentoContratante: string;
  nombreContratantista: string;
  documentoContratantista: string;
  fechaInicial: string; // ISO Date String
  fechaFinal: string;   // ISO Date String
}
