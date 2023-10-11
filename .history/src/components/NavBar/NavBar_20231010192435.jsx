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

<header>
        <nav className="navbar navbar-expand-lg navbar-dark fixed-top navbar-custom">
          <div className="container">
            <p className="display-5 fw-bold text-light logo-img">
              Foto poke
            </p>
           
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0 fs-5">

                <li className="nav-item">
                <NavLink className=  { setActiveClass } to="/">
                Home
            </NavLink>
                </li>
                <li className="nav-item">
                  <a className="nav-link active text-light" href="#Contacto">
                    Contacto
                  </a>
                </li>
              </ul>
            </div>
        </nav>
      </header>




            // {" - "}
            <NavLink className={ setActiveClass } to="/personajes">
                Pokemones
            </NavLink> 



    );
}