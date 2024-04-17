import React from "react";
import Image from "../assets/image.png";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="nav">
      <img src={Image} style={{ width: "50px", height: "50px" }} />
    </nav>
  );
}

export default Navbar;
