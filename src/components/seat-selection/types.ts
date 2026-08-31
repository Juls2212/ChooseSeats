export type SeatStatus = 'available' | 'occupied';

export interface SeatData {
  id: string;
  row: number;
  column: string;
  status: SeatStatus;
}

export interface CabinSection {
  id: number;
  shortLabel: string;
  displayName: string;
  seatPrice: number;
  availableCount: number;
  firstRow: number;
  seatLayout: string[];
  seats: SeatData[];
}
