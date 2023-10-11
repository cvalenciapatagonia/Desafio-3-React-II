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
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarTogglerDemo01"
              aria-controls="navbarTogglerDemo01"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
              <a className="navbar-brand" href="#"></a>
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0 fs-5">
                <li className="nav-item">
                  <a
                    className="nav-link active text-light"
                    aria-current="page"
                    href="#Function-container"
                  >
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link active text-light"
                  >
                    Pokemones
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active text-light" href="#Contacto">
                    Contacto
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
            /* <NavLink className=  { setActiveClass } to="/">
                Home
            </NavLink>
            {" - "}
            <NavLink className={ setActiveClass } to="/personajes">
                Pokemones
            </NavLink> */



    );
}