import { useState, useEffect } from "react";

export default function Ping() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCount((n) => n + 1);
    }, 2000);
  }, []);

  return <h1>I have counted {count} times!</h1>;
}
