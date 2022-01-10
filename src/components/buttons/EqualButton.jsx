import React, { useContext } from "react";
import { CalculatorContext } from "../../contexts/CalculatorContext";

export default function EqualButton() {
  const { input, setInput, setMemory, calculate } =
    useContext(CalculatorContext);

  return (
    <button
      className="basis-1/4 bg-green-500 p-2 m-2 rounded text-xl hover:bg-green-600"
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
