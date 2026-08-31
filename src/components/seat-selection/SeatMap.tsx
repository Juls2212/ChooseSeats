import type { SeatData } from './types';

interface SeatMapProps {
  seats: SeatData[];
  seatLayout: string[];
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
      className={`relative h-8 w-full rounded-[8px] transition-[background-color,transform] duration-150 ease-out motion-reduce:transition-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 lg:h-7 ${
        isOccupied
          ? 'cursor-default bg-gray-400 before:bg-gray-300'
          : isSelected
            ? 'cursor-pointer scale-[1.02] bg-[#5B46E8] before:bg-white hover:bg-[#4E3BD1]'
            : 'cursor-pointer bg-gray-100 before:bg-gray-300 hover:bg-gray-200'
      } before:absolute before:bottom-1 before:left-1.5 before:right-1.5 before:h-px before:rounded-full lg:before:bottom-1.5 lg:before:left-auto lg:before:right-1.5 lg:before:top-1.5 lg:before:h-auto lg:before:w-px`}
    />
  );
}

export function SeatMap({ seats, seatLayout, selectedSeatIds, onSeatChange, selectionMessage }: SeatMapProps) {
  const rows = Array.from(new Set(seats.map((seat) => seat.row)));
  const isBusinessLayout = seatLayout.length === 4;
  const leftColumns = seatLayout.slice(0, seatLayout.length / 2);
  const rightColumns = seatLayout.slice(seatLayout.length / 2);
  const gridClassName = isBusinessLayout
    ? 'grid-cols-[repeat(2,minmax(0,1fr))_24px_repeat(2,minmax(0,1fr))]'
    : 'grid-cols-[repeat(3,minmax(0,1fr))_24px_repeat(3,minmax(0,1fr))]';
  const mapWidthClassName = isBusinessLayout ? 'max-w-[228px] lg:max-w-[250px]' : 'max-w-[292px] lg:max-w-[310px]';

  return (
    <section aria-label="Mapa de asientos">
      <div className={`mx-auto mb-2 grid gap-1.5 px-0.5 text-center text-[9px] font-medium text-gray-400 lg:gap-2 ${gridClassName} ${mapWidthClassName}`}>
        {leftColumns.map((column) => (
          <span key={column}>{column}</span>
        ))}
        <span aria-hidden="true" />
        {rightColumns.map((column) => (
          <span key={column}>{column}</span>
        ))}
      </div>

      <div className={`mx-auto space-y-1.5 lg:space-y-2 ${mapWidthClassName}`}>
        {rows.map((row) => {
          const rowSeats = seats.filter((seat) => seat.row === row);

          return (
            <div key={row} className={`grid gap-1.5 lg:gap-2 ${gridClassName}`}>
              {rowSeats.slice(0, leftColumns.length).map((seat) => (
                <SeatButton
                  key={seat.id}
                  seat={seat}
                  isSelected={selectedSeatIds.includes(seat.id)}
                  onSeatChange={onSeatChange}
                />
              ))}
              <span className="flex items-center justify-center text-[10px] font-medium text-gray-400">{row}</span>
              {rowSeats.slice(leftColumns.length).map((seat) => (
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

      <p aria-live="polite" className="min-h-4 pt-2 text-center text-xs font-medium text-gray-500">
        {selectionMessage}
      </p>
    </section>
  );
}
