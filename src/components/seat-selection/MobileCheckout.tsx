import { formatPrice } from './formatPrice';

interface MobileCheckoutProps {
  selectedSeatIds: string[];
  total: number;
  onSeatRemove: (seatId: string) => void;
}

export function MobileCheckout({ selectedSeatIds, total, onSeatRemove }: MobileCheckoutProps) {
  const hasSelectedSeats = selectedSeatIds.length > 0;

  return (
    <aside className="fixed inset-x-3 bottom-3 z-10 overflow-hidden rounded-[25px] bg-[#151517] px-5 pb-4 pt-3 text-white shadow-2xl sm:px-6 lg:hidden">
      <div aria-label="Asientos seleccionados" className="flex h-7 items-center gap-1.5 overflow-x-auto">
        {selectedSeatIds.map((seatId) => (
          <span key={seatId} className="inline-flex shrink-0 items-center gap-1 rounded-full bg-[#27272B] px-2.5 py-1 text-xs font-medium">
            {seatId}
            <button
              type="button"
              aria-label={`Quitar asiento ${seatId}`}
              onClick={() => onSeatRemove(seatId)}
              className="ml-0.5 flex h-4 w-4 items-center justify-center rounded-full text-gray-400 transition-colors hover:bg-gray-600 hover:text-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white"
            >
              ×
            </button>
          </span>
        ))}
      </div>
      <div className="mt-2 flex items-end justify-between gap-3">
        <div>
          <p className="text-[10px] font-semibold tracking-[0.2em] text-gray-400">TOTAL</p>
          <p className="mt-0.5 text-xl font-bold">{formatPrice(total)}</p>
        </div>
        <button
          type="button"
          disabled={!hasSelectedSeats}
          aria-label={`Confirmar con ${selectedSeatIds.length} asientos`}
          className={`min-w-[142px] rounded-full px-5 py-3 text-sm font-bold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#171719] ${
            hasSelectedSeats
              ? 'bg-[#CAFF4D] text-[#151517] hover:bg-[#BCEB46]'
              : 'cursor-not-allowed bg-[#4A4A4E] text-gray-300'
          }`}
        >
          Confirmar ({selectedSeatIds.length})
        </button>
      </div>
    </aside>
  );
}
