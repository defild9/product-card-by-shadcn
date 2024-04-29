"use client";
import React, { useState } from "react";

interface QuantityInputProps {
  initialQuantity?: number;
  onQuantityChange?: (newQuantity: number) => void;
}

const QuantityInput: React.FC<QuantityInputProps> = ({
  initialQuantity = 0,
  onQuantityChange,
}) => {
  const [quantity, setQuantity] = useState(initialQuantity);

  const handleDecrement = () => {
    const newQuantity = Math.max(0, quantity - 1);
    setQuantity(newQuantity);
    onQuantityChange && onQuantityChange(newQuantity);
  };

  const handleIncrement = () => {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
    onQuantityChange && onQuantityChange(newQuantity);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newQuantity = Math.max(0, parseInt(e.target.value, 10) || 0);
    setQuantity(newQuantity);
    onQuantityChange && onQuantityChange(newQuantity);
  };

  return (
    <div className="flex items-center">
      <button
        className="border border-gray-300 w-10 h-10 rounded-l-md focus:outline-none"
        onClick={handleDecrement}
      >
        -
      </button>
      <input
        type="number"
        value={quantity}
        className="w-10 h-10 text-center border border-gray-300"
        onChange={handleInputChange}
      />
      <button
        className="border border-gray-300 w-10 h-10 rounded-r-md focus:outline-none"
        onClick={handleIncrement}
      >
        +
      </button>
    </div>
  );
};

export default QuantityInput;
