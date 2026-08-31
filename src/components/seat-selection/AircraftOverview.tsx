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
    <section aria-label="Vista del avión" className="relative h-24 overflow-hidden rounded-[24px] border border-gray-100 bg-[#F8F8F9] lg:h-40 lg:rounded-[28px]">
      <div className="absolute left-1/2 top-1/2 h-5 w-[76%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gray-200 lg:h-8" />
      <div className="absolute left-[11%] top-[42%] h-8 w-[25%] -skew-x-[28deg] rounded-l-full bg-gray-100 lg:h-16" />
      <div className="absolute right-[11%] top-[42%] h-8 w-[25%] skew-x-[28deg] rounded-r-full bg-gray-100 lg:h-16" />
      <div className="absolute left-[8%] top-1/2 h-3 w-[12%] -translate-y-1/2 rounded-l-full bg-gray-100 lg:h-5" />

      <div className="absolute left-1/2 top-1/2 flex w-[65%] -translate-x-1/2 -translate-y-1/2 justify-between px-2">
        {Array.from({ length: 13 }, (_, index) => (
          <span key={index} className="h-1 w-1 rounded-full bg-gray-400 lg:h-1.5 lg:w-1.5" />
        ))}
      </div>

      <div className="absolute left-[21%] top-1/2 w-[19%] -translate-y-1/2">
        <div
          className={`h-9 rounded-xl border-2 border-[#151517] transition-transform duration-[420ms] ease-in-out motion-reduce:transition-none lg:h-14 lg:rounded-2xl ${indicatorPosition}`}
        />
      </div>

      <div className="absolute left-4 top-1/2 hidden -translate-y-1/2 flex-col gap-2 lg:flex">
        <button type="button" aria-label="Vista de planta" className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-gray-700 shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black">
          <span className="h-3 w-3 rotate-45 rounded-[2px] border border-gray-700" />
        </button>
        <button type="button" aria-label="Vista de cabina" className="flex h-9 w-9 items-center justify-center rounded-full bg-white shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black">
          <span className="h-3 w-5 rounded-t-full rounded-b-sm bg-[#1A1A1A]" />
        </button>
      </div>
    </section>
  );
}
