import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [fetchedName, setFetchedName] = useState("");

  const handleSubmit = async () => {
    if (name) {
      await axios.post("http://localhost:8080/set-name", { name });
      setName("");
    }
  };

  useEffect(() => {
    const fetchName = async () => {
      const response = await axios.get("http://localhost:8080/get-name");
      if (response.data.name) {
        setFetchedName(response.data.name);
      }
    };
    fetchName();
  }, []);

  return (
    <div>
      <h1>Введите имя</h1>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="AXI"
      />
      <button onClick={handleSubmit}>Submit</button>
      {fetchedName && <h2>Name from server: {fetchedName}</h2>}
    </div>
  );
}

export default App;
