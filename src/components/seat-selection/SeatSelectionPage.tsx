'use client';

import { useEffect, useRef, useState } from 'react';
import { AircraftOverview } from './AircraftOverview';
import { Header } from './Header';
import { MobileCheckout } from './MobileCheckout';
import { SeatMap } from './SeatMap';
import { SectionSelector } from './SectionSelector';
import type { CabinSection, SeatData } from './types';

const columns = ['A', 'B', 'C', 'D', 'E', 'F'];
const maximumSeatSelection = 4;

const createSeats = (firstRow: number, occupiedIds: string[]): SeatData[] => {
  const occupiedSeatIds = new Set(occupiedIds);

  return Array.from({ length: 8 }, (_, index) => {
    const row = index + firstRow;

    return columns.map(
      (column): SeatData => ({
      id: `${row}${column}`,
      row,
      column,
      status: occupiedSeatIds.has(`${row}${column}`) ? 'occupied' : 'available',
      }),
    );
  }).flat();
};

const createSection = (
  id: number,
  shortLabel: string,
  displayName: string,
  seatPrice: number,
  firstRow: number,
  occupiedIds: string[],
): CabinSection => {
  const seats = createSeats(firstRow, occupiedIds);

  return {
    id,
    shortLabel,
    displayName,
    seatPrice,
    availableCount: seats.filter((seat) => seat.status === 'available').length,
    firstRow,
    seatLayout: columns,
    seats,
  };
};

const cabinSections: CabinSection[] = [
  createSection(1, 'Sec. 1', 'Ejecutiva', 480, 1, ['1D', '2B', '3E', '4A', '5F', '6C', '7D', '8B']),
  createSection(2, 'Sec. 2', 'Premium', 260, 9, ['10C', '12B', '14E', '16C']),
  createSection(3, 'Sec. 3', 'Económica', 180, 17, ['17B', '18D', '19A', '20F', '21C', '22E', '23B', '24D']),
];

export default function SeatSelectionPage() {
  const [selectedSection, setSelectedSection] = useState(2);
  const [selectedSeatIds, setSelectedSeatIds] = useState<string[]>([]);
  const [selectionMessage, setSelectionMessage] = useState('');
  const messageTimeoutRef = useRef<number | undefined>(undefined);

  const activeSection = cabinSections.find((section) => section.id === selectedSection) ?? cabinSections[1];
  const total = activeSection.seatPrice * selectedSeatIds.length;

  useEffect(() => {
    return () => {
      if (messageTimeoutRef.current !== undefined) {
        window.clearTimeout(messageTimeoutRef.current);
      }
    };
  }, []);

  const showSelectionMessage = () => {
    if (messageTimeoutRef.current !== undefined) {
      window.clearTimeout(messageTimeoutRef.current);
    }

    setSelectionMessage('Puedes seleccionar máximo 4 asientos.');
    messageTimeoutRef.current = window.setTimeout(() => setSelectionMessage(''), 2200);
  };

  const handleSeatChange = (seatId: string) => {
    const seat = activeSection.seats.find((currentSeat) => currentSeat.id === seatId);

    if (!seat || seat.status === 'occupied') {
      return;
    }

    setSelectedSeatIds((currentSeatIds) =>
      currentSeatIds.includes(seatId)
        ? currentSeatIds.filter((currentSeatId) => currentSeatId !== seatId)
        : currentSeatIds.length < maximumSeatSelection
          ? [...currentSeatIds, seatId]
          : currentSeatIds,
    );

    if (!selectedSeatIds.includes(seatId) && selectedSeatIds.length >= maximumSeatSelection) {
      showSelectionMessage();
    } else {
      setSelectionMessage('');
    }
  };

  const handleSectionChange = (section: number) => {
    setSelectedSection(section);
    setSelectedSeatIds([]);
    setSelectionMessage('');
  };

  const handleSeatRemove = (seatId: string) => {
    setSelectedSeatIds((currentSeatIds) => currentSeatIds.filter((currentSeatId) => currentSeatId !== seatId));
    setSelectionMessage('');
  };

  return (
    <main className="min-h-screen bg-white px-4 pb-48 pt-5 text-black">
      <div className="mx-auto flex w-full max-w-[430px] flex-col gap-5">
        <Header />
        <AircraftOverview selectedSection={selectedSection} />
        <SectionSelector selectedSection={selectedSection} onSectionChange={handleSectionChange} />

        <section className="rounded-[28px] bg-[#F5F5F6] p-4">
          <div className="mb-5 flex items-start justify-between gap-3">
            <h2 className="text-sm font-bold">
              {activeSection.displayName} · {activeSection.shortLabel}
            </h2>
            <p className="text-right text-[10px] font-mono text-gray-400">
              {activeSection.availableCount} libres · ${activeSection.seatPrice} / asiento
            </p>
          </div>
          <SeatMap
            seats={activeSection.seats}
            selectedSeatIds={selectedSeatIds}
            onSeatChange={handleSeatChange}
            selectionMessage={selectionMessage}
          />
        </section>
      </div>

      <MobileCheckout selectedSeatIds={selectedSeatIds} total={total} onSeatRemove={handleSeatRemove} />
    </main>
  );
}
