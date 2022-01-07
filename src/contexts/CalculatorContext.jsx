import React, { createContext, useState } from "react";

export const CalculatorContext = createContext();

export function CalculatorProvider({ children }) {
  const [input, setInput] = useState("");
  const [memory, setMemory] = useState("");

  const calculate = (value) => {
    return eval(value);
  };

  return (
    <CalculatorContext.Provider
      value={{ input, setInput, memory, setMemory, calculate }}
    >
      {children}
    </CalculatorContext.Provider>
  );
}
