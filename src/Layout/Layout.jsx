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

  const handleNavClick = (path) => {
    if (setAramaMetni) setAramaMetni("");
    navigate(path);
  };

  return (
    <div className="layout">
      <header className="navbar">
        <div className="navbar-container">
          <div className="navbar-top">
            <div className="navbar-left" onClick={() => handleNavClick("/haircare")} style={{ cursor: "pointer" }}>
              ROSSWOMAN
            </div>

            <div className="search-container">
              <input
                type="text"
                placeholder="Ürün, marka ya da kategori ara..."
                value={aramaMetni || ""}
                onChange={(e) => setAramaMetni && setAramaMetni(e.target.value)}
              />
              {aramaMetni && <CgClose className="clear-icon" onClick={() => setAramaMetni("")} />}
              <FaSearch className="search-icon" />
            </div>

            <div className="icons">
              <div className="navbar-favorite-link" onClick={() => navigate("/favorites")} style={{ cursor: "pointer" }}>
                <FaHeart size={20} title="Favorilerim" />
              </div>
              <div style={{ position: "relative", cursor: "pointer" }} onClick={() => navigate("/cart")}>
                <FaShoppingCart size={20} title="Sepetim" />
                {cartItems.length > 0 && (
                  <span className="badge-count">
                    {cartItems.reduce((acc, item) => acc + item.quantity, 0)}
                  </span>
                )}
              </div>

              <div className="nav-item login-nav">
                {/* onClick kaldırıldı, sadece ikon kaldı */}
                <FaUserCircle size={25} className="user-icon" />

                <div className="sub-menu login-sub">
                  {/* Alt menü linkleri hala tıklanabilir durumda */}
                  <a onClick={() => handleNavClick("/login")}>Giriş Yap</a>
                  <a onClick={() => handleNavClick("/register")}>Üye Ol</a>
                </div>
              </div>
            </div>
          </div>

          <div className="navbar-bottom">
            <div className="nav-item">
              <a onClick={() => handleNavClick("/haircare")}>Saç Bakım</a>
              <div className="sub-menu">
                <a onClick={() => handleNavClick("/haircare/sampuan")}>Şampuan</a>
                <a onClick={() => handleNavClick("/haircare/krem")}>Saç Kremi</a>
                <a onClick={() => handleNavClick("/haircare/maske")}>Saç Maskesi</a>
              </div>
            </div>

            <div className="nav-item">
              <a onClick={() => handleNavClick("/makeup")}>Makyaj</a>
              <div className="sub-menu">
                <a onClick={() => handleNavClick("/makeup/goz")}>Göz</a>
                <a onClick={() => handleNavClick("/makeup/ten")}>Ten</a>
                <a onClick={() => handleNavClick("/makeup/dudak")}>Dudak</a>
              </div>
            </div>

            <div className="nav-item">
              <a onClick={() => handleNavClick("/skincare")}>Cilt Bakım</a>
              <div className="sub-menu">
                <a onClick={() => handleNavClick("/skincare/temizleme")}>Temizleyiciler</a>
                <a onClick={() => handleNavClick("/skincare/nemlendirici")}>Nemlendiriciler</a>
              </div>
            </div>

            <div className="nav-item">
              <a onClick={() => handleNavClick("/parfume")}>Parfüm</a>
              <div className="sub-menu">
                <a onClick={() => handleNavClick("/parfume/kadinparfum")}>Kadın Parfüm</a>
                <a onClick={() => handleNavClick("/parfume/erkekparfum")}>Erkek</a>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="content">{children}</main>

      <footer className="footer">
        <p>© 2025 RossWoman</p>
        <div className="social-buttons">
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          <a href="https://x.com/" target="_blank" rel="noopener noreferrer"><FaXTwitter /></a>
          <a href="https://tr.linkedin.com/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          <a href="https://www.tiktok.com/" target="_blank" rel="noopener noreferrer"><FaTiktok /></a>
          <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
        </div>
      </footer>
    </div>
  );
}

export default Layout;