import React, { useContext } from "react";
import { CalculatorContext } from "../contexts/CalculatorContext";
import NumberButton from "./NumberButton";

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
        </div>
        <div>
          <NumberButton value="4" />
          <NumberButton value="5" />
          <NumberButton value="6" />
        </div>
        <div>
          <NumberButton value="1" />
          <NumberButton value="2" />
          <NumberButton value="3" />
        </div>
      </form>
    </div>
  );
}
