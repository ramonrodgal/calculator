import React, { useContext } from "react";
import { CalculatorContext } from "../contexts/CalculatorContext";

import NumberButton from "./buttons/NumberButton";
import OperatorButton from "./buttons/OperatorButton";
import ClearButton from "./buttons/ClearButton";
import EqualButton from "./buttons/EqualButton";

export default function Calculator() {
  const { input, memory } = useContext(CalculatorContext);

  return (
    <div className=" bg-gray-500 box-border m-auto mt-12 mb-12 p-6 border-4 max-w-md rounded-xl">
      <div className="flex flex-col">
        <p className="m-2 p-1 text-right text-sm bg-cyan-100">
          {memory ? memory : "-"}
        </p>
        <p className="m-2 p-1 text-right text-4xl bg-cyan-100">
          {input ? input : "0"}
        </p>
      </div>
      <div className="flex flex-row">
        <NumberButton value="7" />
        <NumberButton value="8" />
        <NumberButton value="9" />
        <OperatorButton value="/" />
      </div>
      <div className="flex flex-row">
        <NumberButton value="4" />
        <NumberButton value="5" />
        <NumberButton value="6" />
        <OperatorButton value="*" />
      </div>
      <div className="flex flex-row">
        <NumberButton value="1" />
        <NumberButton value="2" />
        <NumberButton value="3" />
        <OperatorButton value="-" />
      </div>
      <div className="flex flex-row">
        <ClearButton />
        <NumberButton value="0" />
        <EqualButton />
        <OperatorButton value="+" />
      </div>
    </div>
  );
}
