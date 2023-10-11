import { NavLink } from "react-router-dom";
import "./NavBar.css"

export default function NavBar() {
    const setActiveClass = ({ isActive}) => (isActive ? "active" : "inactive");
    return (
        <div className="NavBar">
            <NavLink className=  { setActiveClass } to="/">
                Home
            </NavLink>
            {" - "}
            <NavLink className={ setActiveClass } to="/personajes">
                Pokemones
            </NavLink>
            {/* {" - "}
            <NavLink className={ setActiveClass } to="/caracteristicas">
                Login
            </NavLink> */}
            {/* {" - "}
            <NavLink className={ setActiveClass } to="/origen">
                Origen
            </NavLink> */}
        </div>        
    );
}