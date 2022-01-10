import React, { useContext } from "react";
import { CalculatorContext } from "../../contexts/CalculatorContext";

export default function ClearButton() {
  const { setInput } = useContext(CalculatorContext);
  return (
    <button
      className="basis-1/4 bg-red-500 m-2 p-2 rounded text-xl hover:bg-red-600"
      onClick={(e) => {
        e.preventDefault();
        setInput("");
      }}
    >
      C
    </button>
  );
}
