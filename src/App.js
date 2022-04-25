import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    alert(`You have change the counter to ${count}`);
  }, [count]);

  return (
    <div className="App">
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>+</button>
      <h1>{count}</h1>
      <button onClick={() => setCount((prevCount) => prevCount - 1)}>
        {" "}
        -{" "}
      </button>
    </div>
  );
}

export default App;
