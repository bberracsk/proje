import "./Layout.css";
import { FaInstagram, FaLinkedin, FaTiktok, FaYoutube, FaXTwitter } from "react-icons/fa6";
import { FaShoppingCart, FaHeart, FaUserCircle, FaSearch } from "react-icons/fa";
import { CgClose } from "react-icons/cg";
import React from 'react';
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Layout({ children, aramaMetni, setAramaMetni }) {
  const navigate = useNavigate();

  const cartItems = useSelector((state) => state.cart?.items) || [];
  const favoriteItems = useSelector((state) => state.favorites?.items) || [];

  const handleNavClick = (path) => {
    if (setAramaMetni) setAramaMetni("");
    navigate(path);
  };

  return (
    <div className="layout">
      <header className="navbar">
        <div className="navbar-container">

          {/* ÜST SATIR: Logo, Arama ve İkonlar */}
          <div className="navbar-top">
            <div
              className="navbar-left"
              onClick={() => handleNavClick("/haircare")}
              style={{ cursor: "pointer" }}
            >
              ROSSWOMAN
            </div>

            <div className="search-container">
              <input
                type="text"
                placeholder="Ürün, marka ya da kategori ara..."
                value={aramaMetni || ""}
                onChange={(e) => setAramaMetni && setAramaMetni(e.target.value)}
              />
              {aramaMetni && (
                <CgClose
                  className="clear-icon"
                  onClick={() => setAramaMetni && setAramaMetni("")}
                />
              )}
              <FaSearch className="search-icon" />
            </div>

            <div className="icons">
              {/* Favorilerim Linki */}
              <div
                className="navbar-favorite-link"
                onClick={() => navigate("/favorites")}
                style={{ cursor: "pointer", display: "flex", alignItems: "center", gap: "5px" }}
              >
                <FaHeart size={20} title="Favorilerim" />
                <span className="favorite-text">
                  Favorilerim {favoriteItems.length > 0 ? `(${favoriteItems.length})` : ""}
                </span>
              </div>

              {/* Sepetim İkonu */}
              <div
                style={{ position: "relative", cursor: "pointer" }}
                onClick={() => navigate("/cart")}
              >
                <FaShoppingCart size={20} title="Sepetim" />
                {cartItems.length > 0 && (
                  <span className="badge-count">
                    {cartItems.reduce((acc, item) => acc + item.quantity, 0)}
                  </span>
                )}
              </div>

              <FaUserCircle
                size={25}
                onClick={() => navigate("/login")}
                style={{ cursor: "pointer" }}
              />
            </div>
          </div>

          {/* ALT SATIR: Kategoriler */}
          <div className="navbar-bottom">
            <a onClick={() => handleNavClick("/haircare")}>Saç Bakım</a>
            <a onClick={() => handleNavClick("/makeup")}>Makyaj</a>
            <a onClick={() => handleNavClick("/skincare")}>Cilt Bakım</a>
            <a onClick={() => handleNavClick("/parfume")}>Parfüm</a>
          </div>

        </div> {/* navbar-container KAPANIŞ */}
      </header> {/* navbar KAPANIŞ */}

      <main className="content">
        {children}
      </main>

      <footer className="footer">
        <p>© 2025 RossWoman</p>
        <div className="social-buttons">
          <a href="#"><FaInstagram /></a>
          <a href="#"><FaXTwitter /></a>
          <a href="#"><FaLinkedin /></a>
          <a href="#"><FaTiktok /></a>
          <a href="#"><FaYoutube /></a>
        </div>
      </footer>
    </div>
  );
}

export default Layout;