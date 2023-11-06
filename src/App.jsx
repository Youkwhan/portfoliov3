import { useState } from "react";
import Navbar from "./scenes/navbar";

function App() {
  const [selectedPage, setSelectedPage] = useState("home");
  return (
    <div className="app bg-bg-gray">
      <Navbar selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
    </div>
  );
}

export default App;
