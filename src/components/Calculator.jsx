import React, { useContext } from "react";
import { CalculatorContext } from "../contexts/CalculatorContext";

import NumberButton from "./NumberButton";
import OperatorButton from "./OperatorButton";

export default function Calculator() {
  const { input } = useContext(CalculatorContext);

  return (
    <div>
      <form>
        <div>
          <input type="text" value={input}></input>
        </div>
        <div>
          <NumberButton value="7" />
          <NumberButton value="8" />
          <NumberButton value="9" />
          <OperatorButton value="/" />
        </div>
        <div>
          <NumberButton value="4" />
          <NumberButton value="5" />
          <NumberButton value="6" />
          <OperatorButton value="*" />
        </div>
        <div>
          <NumberButton value="1" />
          <NumberButton value="2" />
          <NumberButton value="3" />
          <OperatorButton value="-" />
        </div>
        <div>
          <NumberButton value="0" />
          <OperatorButton value="+" />
        </div>
      </form>
    </div>
  );
}
