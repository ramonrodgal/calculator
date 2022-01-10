import React, { useContext } from "react";
import { CalculatorContext } from "../../contexts/CalculatorContext";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBackspace } from "@fortawesome/free-solid-svg-icons";

export default function BackButton() {
  const { setInput } = useContext(CalculatorContext);
  return (
    <button
      className="basis-1/2 bg-cyan-500 m-2 p-2 rounded text-xl hover:bg-cyan-600"
      onClick={(e) => {
        e.preventDefault();
        setInput((prevInput) => {
          return prevInput.slice(0, -1);
        });
      }}
    >
      <FontAwesomeIcon icon={faBackspace} />
    </button>
  );
}
