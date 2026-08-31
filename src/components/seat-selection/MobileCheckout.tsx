interface MobileCheckoutProps {
  selectedSeatIds: string[];
  total: number;
  onSeatRemove: (seatId: string) => void;
}

const formatPrice = (price: number) =>
  new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(price);

export function MobileCheckout({ selectedSeatIds, total, onSeatRemove }: MobileCheckoutProps) {
  const hasSelectedSeats = selectedSeatIds.length > 0;

  return (
    <aside className="fixed inset-x-3 bottom-3 z-10 rounded-[28px] bg-[#171719] px-6 pb-6 pt-5 text-white shadow-2xl">
      <div aria-label="Asientos seleccionados" className="flex h-8 items-center gap-2 overflow-x-auto">
        {selectedSeatIds.map((seatId) => (
          <span key={seatId} className="inline-flex shrink-0 items-center gap-1 rounded-full bg-[#27272B] px-3 py-1 text-xs font-medium">
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
      <div className="mt-3 flex items-end justify-between gap-4">
        <div>
          <p className="text-[10px] font-semibold tracking-[0.2em] text-gray-400">TOTAL</p>
          <p className="mt-1 text-2xl font-bold">{formatPrice(total)}</p>
        </div>
        <button
          type="button"
          disabled={!hasSelectedSeats}
          aria-label={`Confirmar con ${selectedSeatIds.length} asientos`}
          className={`rounded-full px-6 py-3 text-sm font-bold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#171719] ${
            hasSelectedSeats
              ? 'bg-[#C7FF4A] text-[#171719] hover:bg-[#B6EB42]'
              : 'cursor-not-allowed bg-[#4A4A4E] text-gray-300'
          }`}
        >
          Confirmar ({selectedSeatIds.length})
        </button>
      </div>
    </aside>
  );
}
