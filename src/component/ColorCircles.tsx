"use client";
import { useState } from "react";

const ColorCircles: React.FC = () => {
  const [selectedColor, setSelectedColor] = useState<number | null>(null);

  const colors: string[] = [
    "#FF5733",
    "#33FF57",
    "#3357FF",
    "#F333FF",
    "#FF3333",
  ];

  const handleCircleClick = (index: number): void => {
    setSelectedColor(index);
  };

  return (
    <div className="flex gap-4 mb-6">
      {colors.map((color, index) => (
        <div
          key={index}
          className={`w-7 h-7 rounded-full ${
            selectedColor === index ? "border-4 border-gray-200" : ""
          }`}
          style={{ backgroundColor: color }}
          onClick={() => handleCircleClick(index)}
        />
      ))}
    </div>
  );
};

export default ColorCircles;
