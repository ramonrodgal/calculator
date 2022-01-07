import React, { useContext } from "react";
import { CalculatorContext } from "../contexts/CalculatorContext";

export default function EqualButton() {
  const { input, setInput, setMemory, calculate } =
    useContext(CalculatorContext);

  return (
    <button
      onClick={(e) => {
        e.preventDefault();

        if (input.match(/[+\-*/]/g)) {
          setMemory(input);
          setInput(calculate(input));
        }
      }}
    >
      =
    </button>
  );
}
