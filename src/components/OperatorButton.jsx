import React, { useContext } from "react";
import { CalculatorContext } from "../contexts/CalculatorContext";

export default function OperatorButton({ value }) {
  const { setInput } = useContext(CalculatorContext);

  return (
    <button
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
