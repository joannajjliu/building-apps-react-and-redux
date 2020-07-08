import React from "react";
import { render } from "react-dom";

function Hi() {
  // debugger; //browsers paiuse execution when reaching the debugger keyword, when dev tools are open
  return <p>Hi.</p>;
}

render(<Hi />, document.getElementById("app"));
