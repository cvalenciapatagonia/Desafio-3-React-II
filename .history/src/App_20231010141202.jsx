import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
export default function App() {
return (
<div className="App">
<BrowserRouter>
<Navbar />
</BrowserRouter>
</div>
);
}
