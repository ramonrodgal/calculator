import React, { createContext, useState } from "react";

export const CalculatorContext = createContext();

export function CalculatorProvider({ children }) {
  const [input, setInput] = useState("");

  return (
    <CalculatorContext.Provider value={{ input, setInput }}>
      {children}
    </CalculatorContext.Provider>
  );
}
