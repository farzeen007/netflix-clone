import React, { useEffect, useState } from "react";

function NavBar() {
  const [showBackground, setShowBackground] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 120) {
        setShowBackground(true);
      } else {
        setShowBackground(false);
      }
      return () => {
        window.removeEventListener("scroll");
      };
    });
  }, []);
  return (
    <div
      className="navbar-container"
      style={{
        backgroundColor: `${showBackground ? `black` : "transparent"}`,
      }}
    >
      <img
        className="navbar-img"
        src={`https://saimohanayinam.github.io/netflix0.1/images/net.png`}
      />
    </div>
  );
}

export default NavBar;
