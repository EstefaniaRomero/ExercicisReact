import { useState } from "react";

// Counter.js
function Counter() {
  const defaultValue = Number(localStorage.getItem("count"));
  const [count, setCount] = useState(isNaN(defaultValue) ? 0 : defaultValue);

  const update = (value) => {
    setCount(count + value);
    localStorage.setItem("count", count + value);
  };

  return (
    <div>
      Comptador: {count}
      <br />
      <button onClick={() => update(1)}>Increment</button>
      <button onClick={() => update(-1)}>Decrement</button>
    </div>
  );
}
export default Counter;
