import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import QuienesSomos from "./pages/QuienesSomos";
import Contacto from "./pages/Contacto";
import Enviado from "./components/Enviado";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/AboutUs" element={<QuienesSomos />} />
        <Route path="/Contact" element={<Contacto />} />
        <Route path="/Enviado" element={<Enviado />} />
      </Routes>
    </BrowserRouter>
  
  );
}

export default App;
