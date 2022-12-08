import React from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <div className="menuBlock">
      <nav>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <Link to="/add-emp">Add Employee</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Menu;
