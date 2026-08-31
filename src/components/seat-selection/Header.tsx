export function Header() {
  return (
    <header className="grid grid-cols-[40px_1fr_40px] items-center gap-3">
      <button
        type="button"
        aria-label="Volver"
        className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white text-lg text-gray-800 shadow-sm transition-colors hover:bg-gray-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2"
      >
        ←
      </button>

      <div className="min-w-0 text-center">
        <h1 className="text-lg font-bold tracking-tight text-black">Elegir asientos</h1>
        <p className="mt-0.5 text-[10px] font-mono tracking-wide text-gray-400">
          BOG → MDE · A320NEO · 12 SEP
        </p>
      </div>

      <div
        aria-label="Perfil de JR"
        className="flex h-10 w-10 items-center justify-center rounded-full bg-[#E8CDBB] text-sm font-bold text-gray-800"
      >
        JR
      </div>
    </header>
  );
}
