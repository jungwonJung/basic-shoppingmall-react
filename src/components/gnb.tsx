import React from "react";
import { Link } from "react-router-dom";

const Gnb = () => {
  return (
    <nav className="gnb">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/products">Product List</Link>
        </li>
        <li>
          <Link to="/cart">Cart</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Gnb;
