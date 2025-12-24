import { useState } from "react";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import HairCare from "./HairCare/HairCare";
import SkinCare from "./SkinCare/SkinCare";
import MakeUp from "./MakeUp/MakeUp";
import Parfume from "./Parfume/Parfume";
import Favorite from "./Favorite/Favorite"; // Buradaki yolun doğruluğundan emin olun

function App() {
  const [aramaMetni, setAramaMetni] = useState("");

  return (
    <BrowserRouter>
      <Routes>
        {/* Giriş sayfası için login route'un yoksa burayı /haircare yapabilirsin */}
        <Route path="/" element={<Navigate to="/haircare" />} />

        <Route path="/haircare" element={<HairCare aramaMetni={aramaMetni} setAramaMetni={setAramaMetni} />} />
        <Route path="/skincare" element={<SkinCare aramaMetni={aramaMetni} setAramaMetni={setAramaMetni} />} />
        <Route path="/makeup" element={<MakeUp aramaMetni={aramaMetni} setAramaMetni={setAramaMetni} />} />
        <Route path="/parfume" element={<Parfume aramaMetni={aramaMetni} setAramaMetni={setAramaMetni} />} />
        <Route path="/favorites" element={<Favorite aramaMetni={aramaMetni} setAramaMetni={setAramaMetni} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;