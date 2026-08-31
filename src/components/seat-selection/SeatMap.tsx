import type { SeatData } from './types';

interface SeatMapProps {
  seats: SeatData[];
  selectedSeatIds: string[];
  onSeatChange: (seatId: string) => void;
  selectionMessage: string;
}

interface SeatButtonProps {
  seat: SeatData;
  isSelected: boolean;
  onSeatChange: (seatId: string) => void;
}

function SeatButton({ seat, isSelected, onSeatChange }: SeatButtonProps) {
  const isOccupied = seat.status === 'occupied';
  const seatState = isOccupied ? 'ocupado' : isSelected ? 'seleccionado' : 'disponible';

  return (
    <button
      type="button"
      disabled={isOccupied}
      aria-label={`Asiento ${seat.id} ${seatState}`}
      aria-pressed={isSelected}
      onClick={() => onSeatChange(seat.id)}
      className={`relative h-9 w-full rounded-lg transition-[background-color,transform] duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 ${
        isOccupied
          ? 'cursor-default bg-gray-400 before:bg-gray-300'
          : isSelected
            ? 'cursor-pointer scale-[1.03] bg-[#6346E8] before:bg-white hover:bg-[#5538D6]'
            : 'cursor-pointer bg-gray-200 before:bg-gray-300 hover:bg-gray-300'
      } before:absolute before:bottom-1 before:left-1.5 before:right-1.5 before:h-1 before:rounded-full`}
    />
  );
}

export function SeatMap({ seats, selectedSeatIds, onSeatChange, selectionMessage }: SeatMapProps) {
  const rows = Array.from(new Set(seats.map((seat) => seat.row)));
  const columns = ['A', 'B', 'C', 'D', 'E', 'F'];

  return (
    <section aria-label="Mapa de asientos">
      <div className="mb-3 grid grid-cols-[repeat(3,minmax(0,1fr))_24px_repeat(3,minmax(0,1fr))] gap-2 px-0.5 text-center text-[10px] font-medium text-gray-400">
        {columns.slice(0, 3).map((column) => (
          <span key={column}>{column}</span>
        ))}
        <span aria-hidden="true" />
        {columns.slice(3).map((column) => (
          <span key={column}>{column}</span>
        ))}
      </div>

      <div className="space-y-2">
        {rows.map((row) => {
          const rowSeats = seats.filter((seat) => seat.row === row);

          return (
            <div key={row} className="grid grid-cols-[repeat(3,minmax(0,1fr))_24px_repeat(3,minmax(0,1fr))] gap-2">
              {rowSeats.slice(0, 3).map((seat) => (
                <SeatButton
                  key={seat.id}
                  seat={seat}
                  isSelected={selectedSeatIds.includes(seat.id)}
                  onSeatChange={onSeatChange}
                />
              ))}
              <span className="flex items-center justify-center text-[10px] font-medium text-gray-400">{row}</span>
              {rowSeats.slice(3).map((seat) => (
                <SeatButton
                  key={seat.id}
                  seat={seat}
                  isSelected={selectedSeatIds.includes(seat.id)}
                  onSeatChange={onSeatChange}
                />
              ))}
            </div>
          );
        })}
      </div>

      <p aria-live="polite" className="min-h-5 pt-3 text-center text-xs font-medium text-gray-500">
        {selectionMessage}
      </p>
    </section>
  );
}
