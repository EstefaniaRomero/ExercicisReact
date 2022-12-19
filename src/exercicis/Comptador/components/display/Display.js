import "./Display.css";
import { useState } from "react";

function Display() {
  const [count, setCount] = useState(0);
  return (
    <>
      <div className="div_Input">
        <input type="text" id="fname" name="fname" />
      </div>
      <div className="div_Input">
        <button onClick={() => setCount((valorActual) => valorActual + 1)}>
          + 1
        </button>
        <button>- 1</button>
      </div>
      <div className="div_Input">
        <button>+ 5</button>
      </div>
    </>
  );
}

export default Display;
