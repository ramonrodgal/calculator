import React, { useContext } from "react";
import { CalculatorContext } from "../../contexts/CalculatorContext";

export default function OperatorButton({ value }) {
  const { input, setInput, setMemory, calculate } =
    useContext(CalculatorContext);

  return (
    <button
      className="basis-1/4 bg-cyan-700 m-2 p-2 rounded text-xl hover:bg-cyan-800"
      onClick={(e) => {
        e.preventDefault();
        if (input && !input.endsWith(".")) {
          setInput((prevInput) => {
            if (input.match(/[+\-*/]/g)) {
              setMemory(input);
              return calculate(input) + e.target.innerText;
            } else {
              return prevInput + e.target.innerText;
            }
          });
        }
      }}
    >
      {value}
    </button>
  );
}
