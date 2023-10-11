import { NavLink } from "react-router-dom";

export default function NavBar() {
    const setActiveClass = ({ isActive}) => (isActive ? "active" : undefined);
    return (
        <div>
            <NavLink className={ setActiveClass} to="/">
                Home
            </NavLink>
            {" - "}
            <NavLink className={ setActiveClass } to="/personajes">
                Personajes
            </NavLink>
        </div>        
    );
}