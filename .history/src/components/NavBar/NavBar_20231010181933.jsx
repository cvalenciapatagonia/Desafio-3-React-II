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
//                 Personajes
//             </NavLink>
//             {" - "}
//             <NavLink className={ setActiveClass } to="/caracteristicas">
//                 Caracteristicas
//             </NavLink>
//             {" - "}
//             <NavLink className={ setActiveClass } to="/origen">
//                 Origen
//             </NavLink>
//         </div>        
//     );
// }

import "./styles.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./views/Home";
import Personajes from "./views/Personajes";
export default function App() {
return (
<div className="App">
<BrowserRouter>
<Navbar />
<Routes>
<Route path="/" element={<Home />} />
<Route path="/personajes/:id" element={<Personajes />} />
</Routes>
</BrowserRouter>
</div>
);
}
