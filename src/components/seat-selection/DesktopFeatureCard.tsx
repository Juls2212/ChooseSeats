export function DesktopFeatureCard() {
  return (
    <aside className="hidden min-h-[360px] flex-col justify-between rounded-[28px] bg-[#151517] p-6 text-white lg:flex">
      <div className="flex items-start justify-between">
        <div className="grid h-12 w-12 grid-cols-3 gap-1 rounded-xl bg-[#CAFF4D] p-2">
          {Array.from({ length: 9 }, (_, index) => (
            <span key={index} className="rounded-full bg-[#151517]" />
          ))}
        </div>
        <span className="text-xl" aria-hidden="true">↗</span>
      </div>
      <div>
        <h2 className="text-lg font-bold">Renderizado 3D</h2>
        <p className="mt-3 text-sm leading-6 text-gray-400">
          Recorre la cabina de tu avión con visualización 3D y descubre lo que te espera a bordo.
        </p>
      </div>
    </aside>
  );
}
