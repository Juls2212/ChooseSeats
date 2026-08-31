interface SectionSelectorProps {
  selectedSection: number;
  onSectionChange: (section: number) => void;
}

export function SectionSelector({ selectedSection, onSectionChange }: SectionSelectorProps) {
  return (
    <div aria-label="Seleccionar sección" className="relative flex w-full rounded-full bg-gray-100 p-1 lg:w-[320px]">
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-1 left-1 w-[calc((100%-8px)/3)] rounded-full bg-[#151517] shadow-sm transition-transform duration-[380ms] ease-in-out motion-reduce:transition-none"
        style={{ transform: `translateX(${(selectedSection - 1) * 100}%)` }}
      />
      {[1, 2, 3].map((section) => {
        const isActive = selectedSection === section;

        return (
          <button
            key={section}
            type="button"
            aria-label={`Sección ${section}`}
            aria-pressed={isActive}
            onClick={() => onSectionChange(section)}
            className={`relative z-10 flex-1 rounded-full py-2.5 text-sm font-semibold transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 ${
              isActive ? 'text-white' : 'text-gray-500 hover:text-black'
            }`}
          >
            {section}
          </button>
        );
      })}
    </div>
  );
}
