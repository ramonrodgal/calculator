import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalculator } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  return (
    <header className="m-6 p-2 text-cyan-200">
      <h1 className="text-center pb-6 text-6xl">
        {" "}
        <FontAwesomeIcon icon={faCalculator} /> - Simple Calculator
      </h1>
      <hr />
    </header>
  );
}
