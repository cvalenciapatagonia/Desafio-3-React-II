//? EJEMPLO 1 
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Navbar from "./components/NavBar/NavBar";
// export default function App() {
// return (
// <div className="App">
// <BrowserRouter>
// <Navbar />
// </BrowserRouter>
// </div>
// );
// }

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/NavBar/NavBar";
import Home from "./views/Home";
import Pokemones from "./views/Pokemones";



export default function App() {
return (
<div className="App">
<BrowserRouter>
<Navbar />
<Routes>
<Route path="/" element={<Home />} />
<Route path="/pokemones" element={<Pokemones />} />
</Routes>
</BrowserRouter>
</div>
);
}



