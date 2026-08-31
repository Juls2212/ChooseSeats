'use client';

import { useState } from 'react';

interface Seat {
  id: string;
  row: number;
  col: string;
  status: 'available' | 'occupied';
  price: number;
}

const columns = ['A', 'B', 'C', 'D', 'E', 'F'];

const createSeatData = (): Seat[] => {
  const occupiedSeatIds = new Set<string>();
  const totalSeats = 17 * columns.length;
  const occupiedSeatCount = Math.round(totalSeats * 0.3);

  while (occupiedSeatIds.size < occupiedSeatCount) {
    const row = Math.floor(Math.random() * 17) + 1;
    const col = columns[Math.floor(Math.random() * columns.length)];

    occupiedSeatIds.add(`${row}${col}`);
  }

  return Array.from({ length: 17 }, (_, rowIndex) => {
    const row = rowIndex + 1;
    const price = row <= 8 ? 480 : 260;

    return columns.map((col) => {
      const id = `${row}${col}`;

      return {
        id,
        row,
        col,
        status: occupiedSeatIds.has(id) ? 'occupied' : 'available',
        price,
      };
    });
  }).flat();
};

const seats = createSeatData();

export default function SeatSelection() {
  const [selectedSeats, setSelectedSeats] = useState<string[]>([]);
  const [activeSection, setActiveSection] = useState(2);

  void seats;
  void selectedSeats;
  void setSelectedSeats;
  void activeSection;
  void setActiveSection;

  return (
    <div className="min-h-screen bg-[#F9FAFB] text-gray-900 font-sans flex flex-col md:flex-row md:justify-center md:items-start p-0 md:p-8 md:gap-8">
      <div className="w-full md:w-[70%] flex flex-col gap-6 p-4 md:p-0" />
    </div>
  );
}
