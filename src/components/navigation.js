import React from "react";
import { NavLink } from "react-router-dom";

export default function NavigationComponent() {
  return (
    <div className="nav-wrapper">
      <NavLink exact to="/">
        Home
      </NavLink>
      <NavLink to="/hamburger">Hamburger</NavLink>
      <NavLink to="/show-hide">Show Hide</NavLink>
      <NavLink to="/toggle">Toggle</NavLink>
      <NavLink to="/counter">Counter</NavLink>
      <NavLink to="/font-sizer">Font Sizer</NavLink>
      <NavLink to="/align">Align</NavLink>
      <NavLink to="/color">Color</NavLink>
      <NavLink to="/clock">Clock</NavLink>
    </div>
  );
}
