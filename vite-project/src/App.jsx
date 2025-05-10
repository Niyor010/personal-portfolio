import { useState } from "react";

import Header from "./Components/Header";
import Hero from "./Components/Hero";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="app">
      <Header />
      <main className="main-content">
        <Hero />
        {/* Other sections will go here */}
      </main>
    </div>
  );
}

export default App;
