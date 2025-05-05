import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div>
        <img src="/public/seyi-logo.svg" alt="Ṣèyí,ThePoet Logo" />
      </div>

      <nav>
        <ul>
          <li>Music</li>
          <li>OffStage</li>
          <li>Updates</li>
          <li>Contact</li>
        </ul>

        <div className="opacity-0 " aria-hidden="true">
          <p>Menu</p>
          <div>
            {" "}
            <ul>
              <li>Music</li>
              <li>OffStage</li>
              <li>Updates</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
