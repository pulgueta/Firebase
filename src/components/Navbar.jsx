import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoMenuOutline, IoCloseOutline } from "react-icons/io5";

import '../styles.css'

const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };

  return (
    <nav>
      <Link to={"/"} className="nav-title">
        Firebase & React
      </Link>

      <div className="nav-els">
        <ul className="nav-element">
          <li className="nav-item">
            <Link to={"/sign-in"} className="nav-link">
              Log In
            </Link>
          </li>

          <li className="nav-item">
            <Link to={"/posts"} className="nav-link">
              Posts
            </Link>
          </li>

          <li className="nav-item">
            <Link to={"/posts"} className="nav-link">
              Posts
            </Link>
          </li>

          <div className="nav-icon" onClick={handleClick}>
            {click ? <IoCloseOutline /> : <IoMenuOutline />}
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
