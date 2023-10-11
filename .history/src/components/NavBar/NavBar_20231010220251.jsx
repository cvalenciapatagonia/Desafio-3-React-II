import { NavLink } from "react-router-dom";
import "./NavBar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Pokeball from "../Pokeball";

export default function NavBar() {
  const setActiveClass = ({ isActive }) => (isActive ? "active" : "inactive");
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top navbar-custom">
        <div className="container">
            <Pokeball/>

          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 fs-5">
            <li className="nav-item">
              <NavLink className={setActiveClass} to="/" >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={setActiveClass} to="/personajes">
                Pokemones
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
