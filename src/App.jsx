import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import Login from "./Login/Login";
import Home from "./Home/Home";
import HairCare from "./HairCare/HairCare";
import SkinCare from "./SkinCare/SkinCare";
import MakeUp from "./MakeUp/MakeUp";
import Parfume from "./Parfume/Parfume";

function App() {
  return (
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/haircare" element={<HairCare />} />
        <Route path="/skincare" element={<SkinCare />} />
        <Route path="/makeup" element={<MakeUp />} />
        <Route path="/parfume" element={<Parfume />} />




      </Routes>
    </BrowserRouter>
  );
}

export default App;