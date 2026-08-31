export function DesktopFeatureCard() {
  return (
    <aside className="hidden min-h-[285px] flex-col justify-between rounded-[24px] bg-[#151517] p-5 text-white lg:flex">
      <div className="flex items-start justify-between">
        <div className="grid h-12 w-12 grid-cols-3 gap-1 rounded-xl bg-[#CAFF4D] p-2">
          {Array.from({ length: 9 }, (_, index) => (
            <span key={index} className="rounded-full bg-[#151517]" />
          ))}
        </div>
        <span className="text-xl" aria-hidden="true">↗</span>
      </div>
      <div>
        <h2 className="text-base font-bold">Renderizado 3D</h2>
        <p className="mt-2 text-xs leading-5 text-gray-400">
          Recorre la cabina de tu avión con visualización 3D y descubre lo que te espera a bordo.
        </p>
      </div>
    </aside>
  );
}
