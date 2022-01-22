import React, { useState } from "react";

function DarkMode({ getMode }) {
  const [darkmode, setDarkmode] = useState(false);
  const [mode, setMode] = useState("light mode");
  const [background, setBackground] = useState({
    back: "white",
    color: "black",
  });

  getMode(darkmode);
  const setModeHandler = () => {
    setDarkmode((prevState) => {
      if (prevState === false) {
        return true;
      } else {
        return false;
      }
    });
    setMode((prevState) => {
      if (prevState === "light mode") {
        return "dark mode";
      } else {
        return "light mode";
      }
    });
  };

  return (
    <button
      className="mode-button"
      style={{ background: background.back, color: background.color }}
      onClick={setModeHandler}
    >
      {mode}
    </button>
  );
}

export default DarkMode;
