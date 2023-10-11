import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/NavBar/NavBar";
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



