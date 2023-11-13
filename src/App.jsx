import { useState, useEffect } from "react";
import Navbar from "./scenes/navbar";
import Home from "./scenes/home";
import Work from "./scenes/work";

function App() {
  const [selectedPage, setSelectedPage] = useState("home");
  const [isTopOfPage, setIsTopOfPage] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage("home");
      }
      if (window.scrollY != 0) {
        setIsTopOfPage(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    // When component unmounts
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="app bg-bg-gray">
      <Navbar selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
      <Home />
      <Work />
    </div>
  );
}

export default App;
