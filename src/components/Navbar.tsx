import React from "react";

function Navbar() {
  return (
    <div className="navbar">
      <div className="flex-1 nav-list">
        <nav className="flex-1">
          <ul className="ul">
            <li className="ul-link">Home</li>
            <li className="ul-link">About</li>
            <li className="ul-link">Contact</li>
          </ul>
        </nav>
      </div>
      <div className="flex-1 heading">
        <h2 className="heading">Heading</h2>
      </div>
      <div className="flex-1 buy-now">
        <button className="buy-now-button">Buy now</button>
      </div>
    </div>
  );
}

export default Navbar;
