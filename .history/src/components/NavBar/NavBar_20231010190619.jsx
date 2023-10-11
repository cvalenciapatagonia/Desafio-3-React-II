// import { NavLink } from "react-router-dom";
// import "./NavBar.css"

// export default function NavBar() {
//     const setActiveClass = ({ isActive}) => (isActive ? "active" : "inactive");
//     return (
//         <div className="NavBar">
//             <NavLink className=  { setActiveClass } to="/">
//                 Home
//             </NavLink>
//             {" - "}
//             <NavLink className={ setActiveClass } to="/personajes">
//                 Pokemones
//             </NavLink>
//         </div>        
//     );
// }

import { NavLink } from "react-router-dom";
import "./NavBar.css"
import "bootstrap/dist/css/bootstrap.min.css";

export default function NavBar() {
    const setActiveClass = ({ isActive}) => (isActive ? "active" : "inactive");
    return (
        <nav className="navbar navbar-expand-lg navbar-dark fixed-top navbar-custom">

            <NavLink className=  { setActiveClass } to="/">
                Home
            </NavLink>
            {" - "}
            <NavLink className={ setActiveClass } to="/personajes">
                Pokemones
            </NavLink>
            </nav>
    );
}