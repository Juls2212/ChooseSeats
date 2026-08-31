interface SectionSelectorProps {
  selectedSection: number;
  onSectionChange: (section: number) => void;
}

export function SectionSelector({ selectedSection, onSectionChange }: SectionSelectorProps) {
  return (
    <div aria-label="Seleccionar sección" className="flex w-full rounded-full bg-gray-100 p-1">
      {[1, 2, 3].map((section) => {
        const isActive = selectedSection === section;

        return (
          <button
            key={section}
            type="button"
            aria-label={`Sección ${section}`}
            aria-pressed={isActive}
            onClick={() => onSectionChange(section)}
            className={`flex-1 rounded-full py-2.5 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 ${
              isActive ? 'bg-[#1A1A1A] text-white shadow-md' : 'text-gray-500 hover:text-black'
            }`}
          >
            {section}
          </button>
        );
      })}
    </div>
  );
}
