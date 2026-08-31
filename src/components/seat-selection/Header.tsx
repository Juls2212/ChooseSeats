export function Header() {
  return (
    <header className="relative flex items-center justify-between lg:justify-between">
      <button
        type="button"
        aria-label="Volver"
        className="absolute left-0 flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white text-lg text-gray-800 shadow-sm transition-colors hover:bg-gray-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 lg:hidden"
      >
        ←
      </button>

      <div className="mx-auto min-w-0 text-center lg:mx-0 lg:text-left">
        <h1 className="text-base font-bold tracking-tight text-black lg:text-2xl">Elegir asientos</h1>
        <p className="mt-px text-[9px] font-mono tracking-wide text-gray-400 lg:text-[10px]">
          BOG → MDE · A320NEO · 12 SEP
        </p>
      </div>

      <div className="absolute right-0 flex items-center gap-3 lg:static">
        <div className="hidden items-center gap-2 rounded-full border border-gray-200 bg-white px-3 py-1.5 text-xs font-semibold lg:flex">
          <span className="h-2 w-2 rounded-full bg-green-400" aria-hidden="true" />
          <span>Check-in abierto</span>
        </div>
        <div
          aria-label="Perfil de JR"
          className="flex h-10 w-10 items-center justify-center rounded-full bg-[#E8CDBB] text-sm font-bold text-gray-800"
        >
          JR
        </div>
      </div>
    </header>
  );
}
