import { useState } from "react";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";

// Bileşenleri (Sayfaları) Import Et
import HairCare from "./HairCare/HairCare";
import SkinCare from "./SkinCare/SkinCare";
import MakeUp from "./MakeUp/MakeUp";
import Parfume from "./Parfume/Parfume";
import Favorite from "./Favorite/Favorite";
import Cart from "./Cart/Cart";
import Login from "./Login/Login";
import Register from "./Register/Register"; // Artık import edebiliriz

function App() {
  const [aramaMetni, setAramaMetni] = useState("");

  return (
    <BrowserRouter>
      <Routes>
        {/* Ana Sayfa Yönlendirmesi */}
        <Route path="/" element={<Navigate to="/haircare" />} />

        {/* Kimlik Doğrulama Sayfaları */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Saç Bakım Kategorisi */}
        <Route path="/haircare" element={<HairCare aramaMetni={aramaMetni} setAramaMetni={setAramaMetni} />} />
        <Route path="/haircare/:subCategory" element={<HairCare aramaMetni={aramaMetni} setAramaMetni={setAramaMetni} />} />

        {/* Cilt Bakım Kategorisi */}
        <Route path="/skincare" element={<SkinCare aramaMetni={aramaMetni} setAramaMetni={setAramaMetni} />} />
        <Route path="/skincare/:subCategory" element={<SkinCare aramaMetni={aramaMetni} setAramaMetni={setAramaMetni} />} />

        {/* Makyaj Kategorisi */}
        <Route path="/makeup" element={<MakeUp aramaMetni={aramaMetni} setAramaMetni={setAramaMetni} />} />
        <Route path="/makeup/:subCategory" element={<MakeUp aramaMetni={aramaMetni} setAramaMetni={setAramaMetni} />} />

        {/* Parfüm Kategorisi */}
        <Route path="/parfume" element={<Parfume aramaMetni={aramaMetni} setAramaMetni={setAramaMetni} />} />
        <Route path="/parfume/:subCategory" element={<Parfume aramaMetni={aramaMetni} setAramaMetni={setAramaMetni} />} />

        {/* Sepet ve Favoriler */}
        <Route path="/favorites" element={<Favorite aramaMetni={aramaMetni} setAramaMetni={setAramaMetni} />} />
        <Route path="/cart" element={<Cart aramaMetni={aramaMetni} setAramaMetni={setAramaMetni} />} />

        {/* Hatalı URL'leri Ana Sayfaya Gönder */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;