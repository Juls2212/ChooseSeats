import { formatPrice } from './formatPrice';

interface DesktopCheckoutProps {
  selectedSeatIds: string[];
  total: number;
  onSeatRemove: (seatId: string) => void;
}

export function DesktopCheckout({ selectedSeatIds, total, onSeatRemove }: DesktopCheckoutProps) {
  const hasSelectedSeats = selectedSeatIds.length > 0;

  return (
    <div className="mt-4 hidden items-center justify-between gap-4 rounded-2xl bg-white px-4 py-3 shadow-sm lg:flex">
      <div aria-label="Asientos seleccionados" className="flex min-h-7 flex-wrap items-center gap-1.5">
        {selectedSeatIds.map((seatId) => (
          <span key={seatId} className="inline-flex items-center gap-1 rounded-full bg-[#151517] px-2.5 py-1 text-xs font-medium text-white">
            {seatId}
            <button
              type="button"
              aria-label={`Quitar asiento ${seatId}`}
              onClick={() => onSeatRemove(seatId)}
              className="text-gray-400 hover:text-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white"
            >
              ×
            </button>
          </span>
        ))}
      </div>
      <div className="flex shrink-0 items-center gap-4">
        <div className="text-right">
          <p className="text-[10px] font-semibold tracking-[0.2em] text-gray-400">TOTAL</p>
          <p className="text-lg font-bold">{formatPrice(total)}</p>
        </div>
        <button
          type="button"
          disabled={!hasSelectedSeats}
          className={`rounded-full px-5 py-2.5 text-sm font-bold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 ${
            hasSelectedSeats
              ? 'bg-[#CAFF4D] text-[#151517] hover:bg-[#BCEB46]'
              : 'cursor-not-allowed bg-gray-200 text-gray-400'
          }`}
        >
          Confirmar ({selectedSeatIds.length})
        </button>
      </div>
    </div>
  );
}
