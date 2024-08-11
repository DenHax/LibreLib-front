import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  const [inputValue, setInput] = useState("");

  const handleName = () => {
    setName(document.querySelector("#name-input").value);
  };

  return (
    <>
      <h2>Enter You name:</h2>
      <div className="card">
        <input
          type="text"
          name="input"
          value={inputValue}
          id="name-input "
          onChange={(event) => setInput(event.target.value)}
        />
        <button onClick={() => handleName()}>Enter</button>
        <br />
        <button onClick={() => setCount((count) => count + 1)}>{count}</button>
        <p>
          Greet you {count} times, {name}!
        </p>
      </div>
    </>
  );
}

export default App;
