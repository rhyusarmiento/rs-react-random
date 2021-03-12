import React from "react";
import { NavLink } from "react-router-dom";

export default function Navigation() {
  return (
    <div className="nav-wrapper">
        <NavLink exact to="/">
            Home
        </NavLink>
        <NavLink to="/hamburger">
            Hamburger
        </NavLink>
    </div>
  );
}
