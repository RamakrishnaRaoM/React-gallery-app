import { useState } from "react";
import { useEffect } from "react";
import Imagee from "./components/Imagee";
import "./App.css";
import ImageList from "./components/ImageList";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h2>React Image Gallery app</h2>
      <div>
       <ImageList/>
        <Imagee />
      </div>
    </>
  );
}

export default App;
