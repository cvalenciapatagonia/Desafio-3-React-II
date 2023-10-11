import React from 'react';
import { NavLink } from 'react-router-dom';

export default function NavBar() {
  return (
    <div className="NavBar">
      <NavLink exact to="/" activeClassName="active-link" className="not-active-link">
        Home
      </NavLink>
      {" - "}
      <NavLink to="/personajes" activeClassName="active-link" className="not-active-link">
        Personajes
      </NavLink>
    </div>
  );
}
