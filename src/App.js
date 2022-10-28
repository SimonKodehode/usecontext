import { NumberContext } from "./helper/Context"
import './App.css';
import AnExample from "./components/AnExample"
import {useState} from "react"

function App() {
  const [number, setNumber] = useState(0);

  return (
    <NumberContext.Provider value={{number, setNumber}}>
      <AnExample />
    </NumberContext.Provider>
  );
}

export default App;
