import { useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import Content from "./Components/Content";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Content />
    </>
  );
}

export default App;
