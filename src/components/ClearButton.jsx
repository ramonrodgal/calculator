import React, { useContext } from "react";
import { CalculatorContext } from "../contexts/CalculatorContext";

export default function ClearButton() {
  const { setInput } = useContext(CalculatorContext);
  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        setInput("");
      }}
    >
      C
    </button>
  );
}
