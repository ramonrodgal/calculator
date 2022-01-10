import React, { useContext } from "react";
import { CalculatorContext } from "../../contexts/CalculatorContext";

export default function DotButton() {
  const { input, setInput } = useContext(CalculatorContext);
  return (
    <button
      className="basis-1/4 bg-cyan-700 m-2 p-2 rounded text-xl hover:bg-cyan-800"
      onClick={(e) => {
        e.preventDefault();

        if (input.match(/[0-9]$/g)) {
          if (!input.includes(".")) {
            setInput((prevInput) => {
              return prevInput + e.target.innerText;
            });
          } else if (input.match(/[+\-*/]/g)) {
            const operator = input.match(/[+\-*/]/g)[0];
            const numbers = input.split(operator);

            if (!numbers[1].includes(".")) {
              setInput((prevInput) => {
                return prevInput + e.target.innerText;
              });
            }
          }
        }
      }}
    >
      .
    </button>
  );
}
