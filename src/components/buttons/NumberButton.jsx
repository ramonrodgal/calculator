import React, { useContext } from "react";
import { CalculatorContext } from "../../contexts/CalculatorContext";

export default function NumberButton({ value }) {
  const { setInput } = useContext(CalculatorContext);
  return (
    <button
      className="basis-1/4 bg-cyan-400 m-2 p-2 rounded text-xl hover:bg-cyan-500"
      onClick={(e) => {
        e.preventDefault();
        setInput((prevInput) => {
          return prevInput + e.target.innerText;
        });
      }}
    >
      {value}
    </button>
  );
}
