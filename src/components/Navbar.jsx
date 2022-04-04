import React from "react";
import { Link } from "react-router-dom";
import { IoMenuOutline, IoCloseOutline } from "react-icons/io5";

const Navbar = () => {
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
            <Link to={"/posts"} className="nav-link">
              Posts
            </Link>
          </li>

          <li className="nav-item">
            <Link to={"/"} className="nav-link logout">
              Log Out
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
