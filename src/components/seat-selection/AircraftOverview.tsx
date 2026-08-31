interface AircraftOverviewProps {
  selectedSection: number;
}

export function AircraftOverview({ selectedSection }: AircraftOverviewProps) {
  const indicatorPosition =
    selectedSection === 1
      ? 'translate-x-0'
      : selectedSection === 2
        ? 'translate-x-full'
        : 'translate-x-[200%]';

  return (
    <section aria-label="Vista del avión" className="relative h-28 overflow-hidden rounded-[28px] border border-gray-100 bg-[#F8F8F9]">
      <div className="absolute left-1/2 top-1/2 h-9 w-[76%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gray-200" />
      <div className="absolute left-[8%] top-[39%] h-14 w-[28%] -skew-x-[28deg] rounded-l-full bg-gray-100" />
      <div className="absolute right-[8%] top-[39%] h-14 w-[28%] skew-x-[28deg] rounded-r-full bg-gray-100" />

      <div className="absolute left-1/2 top-1/2 flex w-[65%] -translate-x-1/2 -translate-y-1/2 justify-between px-2">
        {Array.from({ length: 13 }, (_, index) => (
          <span key={index} className="h-1 w-1 rounded-full bg-gray-400" />
        ))}
      </div>

      <div className="absolute left-[20%] top-1/2 w-[20%] -translate-y-1/2">
        <div
          className={`h-12 rounded-2xl border-2 border-black transition-transform duration-300 ${indicatorPosition}`}
        />
      </div>
    </section>
  );
}
