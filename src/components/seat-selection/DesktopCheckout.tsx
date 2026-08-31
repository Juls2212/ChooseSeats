import { formatPrice } from './formatPrice';

interface DesktopCheckoutProps {
  selectedSeatIds: string[];
  total: number;
  onSeatRemove: (seatId: string) => void;
}

export function DesktopCheckout({ selectedSeatIds, total, onSeatRemove }: DesktopCheckoutProps) {
  const hasSelectedSeats = selectedSeatIds.length > 0;

  return (
    <div className="mt-6 hidden items-center justify-between gap-5 rounded-2xl bg-white p-4 shadow-sm lg:flex">
      <div aria-label="Asientos seleccionados" className="flex min-h-8 flex-wrap items-center gap-2">
        {selectedSeatIds.map((seatId) => (
          <span key={seatId} className="inline-flex items-center gap-1 rounded-full bg-[#151517] px-3 py-1.5 text-xs font-medium text-white">
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
      <div className="flex shrink-0 items-center gap-5">
        <div className="text-right">
          <p className="text-[10px] font-semibold tracking-[0.2em] text-gray-400">TOTAL</p>
          <p className="text-xl font-bold">{formatPrice(total)}</p>
        </div>
        <button
          type="button"
          disabled={!hasSelectedSeats}
          className={`rounded-full px-6 py-3 text-sm font-bold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 ${
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
