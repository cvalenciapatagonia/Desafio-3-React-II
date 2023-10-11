import { NavLink } from "react-router-dom";

export default function NavBar() {
    const setActiveClass = ({ isActive}) => (isActive ? "active" : "inactive");
    return (
        <div className="NavBar">
            <NavLink className=  { setActiveClass } to="/">
                Home
            </NavLink>
            {" - "}
            <NavLink className={ setActiveClass } to="/personajes">
                Personajes
            </NavLink>
            {" - "}
            <NavLink className={ setActiveClass } to="/caracteristicas">
                Caracteristicas
            </NavLink>
            {" - "}
            <NavLink className={ setActiveClass } to="/origen">
                Origen
            </NavLink>
        </div>        
    );
}