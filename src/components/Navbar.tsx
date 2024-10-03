import { useState } from "react";
import "./NavBar.css";
import { CloseIcon } from "../assets/close";
import { MenuIcon } from "../assets/menu";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [animation, setAnimation] = useState<"slide-in" | "slide-out" | "">("");

  const toggleMenu = () => {
    setAnimation(menuOpen ? "slide-out" : "slide-in");
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="navbar">
      <div className={`flex-1 nav-list ${animation}`}>
        <nav>
          <ul className="ul">
            <li className="ul-link">Home</li>
            <li className="ul-link">About</li>
            <li className="ul-link">Contact</li>
          </ul>
        </nav>
        <div className={`menu-buy-now`}>
          <button className={`menu-buy-now-button`}>Buy now</button>
        </div>
      </div>
        <h2 className="heading flex-1 text-center">Landing</h2>
      <div className={`flex-1 nav-bar-buy-now-button justify-center`}>
        <button className="buy-now-button">Buy now</button>
      </div>

      {/* Toggle Button for Mobile */}
      <button className="menu-toggle-button" onClick={toggleMenu}>
        {menuOpen ? <CloseIcon /> : <MenuIcon />}
      </button>
    </div>
  );
}

export default Navbar;
