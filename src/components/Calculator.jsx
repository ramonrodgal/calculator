import React, { useState } from "react";

export default function Calculator() {
  const [input, setInput] = useState("");

  return (
    <div>
      <form>
        <div>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          ></input>
        </div>
      </form>
    </div>
  );
}
