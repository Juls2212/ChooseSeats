export function SeatLegend() {
  const items = [
    { label: 'Disponible', color: 'bg-gray-100' },
    { label: 'Ocupado', color: 'bg-gray-400' },
    { label: 'Tu selección', color: 'bg-[#5B46E8]' },
  ];

  return (
    <div aria-label="Leyenda de asientos" className="hidden items-center gap-4 text-xs text-gray-600 lg:flex">
      {items.map((item) => (
        <span key={item.label} className="flex items-center gap-2">
          <span className={`h-2 w-2 rounded-sm ${item.color}`} aria-hidden="true" />
          {item.label}
        </span>
      ))}
    </div>
  );
}
