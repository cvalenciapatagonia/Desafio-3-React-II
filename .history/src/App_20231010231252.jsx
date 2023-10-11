import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/NavBar/NavBar";
import Home from "./views/Home";
import Pokemones from "./views/Pokemones";
import Description from "./views/Description.jsx";



export default function App() {
return (
<div className="App">
<BrowserRouter>
<Navbar />
<Routes>
<Route path="/" element={<Home />} />
<Route path="/pokemones" element={<Pokemones />} />
<Route path="/pokemones/:pokemonSelected" element={<Description />} />
</Routes>
</BrowserRouter>
</div>
);
}



