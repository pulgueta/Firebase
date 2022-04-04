import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoMenuOutline, IoCloseOutline } from "react-icons/io5";

import "../styles.css";

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
            <Link to={"/"} className="nav-link">
              Home
            </Link>
          </li>

          <li className="nav-item">
            <Link to={"/create"} className="nav-link">
              Create a post
            </Link>
          </li>

          <li className="nav-item">
            <Link to={"/posts"} className="nav-link">
              Posts
            </Link>
          </li>
        </ul>

        <div className="nav-icon" onClick={handleClick}>
          {click ? (
            <IoCloseOutline fontSize={"large"} />
          ) : (
            <IoMenuOutline fontSize={"large"} />
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
