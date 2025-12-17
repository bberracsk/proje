import "./Layout.css";
import { FaInstagram, FaLinkedin, FaTiktok, FaYoutube, FaXTwitter } from "react-icons/fa6";
import { FaShoppingCart, FaHeart, FaUserCircle, FaSearch } from "react-icons/fa";
import React, { useState } from 'react';



function Layout({ children, isFullWidth }) {

  const [aramaMetni, setAramaMetni] = useState("");

  const childrenWithProps = React.Children.map(children, child => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, { aramaMetni });
    }
    return child;
  });

  return (
    <div className="layout">
      <header className="navbar">

        <div className="navbar-container">

          {/* ===== ÜST SATIR ===== */}
          <div className="navbar-top">

            <div className="navbar-left">ROSSWOMAN</div>

            {/*  <div className="search-container">
              <input type="text" placeholder="Ürün, marka veya kategori ara..." />
              <FaSearch className="search-icon" />
            </div> */}

            <div className="search-container" style={{ position: 'relative', width: '300px' }}>
              <input
                type="text"
                placeholder="Ürün ara..."
                value={aramaMetni} // Prop'tan geliyor
                onChange={(e) => setAramaMetni(e.target.value)} // Prop'tan gelen fonksiyon
              />
              <FaSearch
                className="search-icon"

              />
            </div>

            {/* SAĞ İKONLAR */}
            <div className="icons">
              <FaHeart
                size={20}
                onClick={() => window.location.href = ""}
                title="Favorilerim"
              />
              <FaShoppingCart
                size={20}
                onClick={() => window.location.href = "/cart"}
                title="Sepetim"
              />
              <FaUserCircle
                size={25}
                onClick={() => window.location.href = "/Login"}
                title="Giriş Yap"
              />
            </div>

          </div>

          {/* ===== ALT SATIR (KATEGORİLER) ===== */}
          <div className="navbar-bottom">
            <a href="HairCare">Saç Bakım</a>
            <a href="MakeUp">Makyaj</a>
            <a href="SkinCare">Cilt Bakım</a>
            <a href="Parfume">Parfüm</a>
          </div>

        </div>
      </header>
      <main className="content" aramaMetni={aramaMetni}>
        {childrenWithProps}
      </main>
      <footer className="footer">
        <p>© 2025 RossWoman</p>
        <div className="footer-section">

          <div className="social-buttons">
            <a href="https://www.instagram.com/" target="_blank"><FaInstagram /> </a>
            <a href="https://x.com/?lang=tr" target="_blank"><FaXTwitter /></a>
            <a href="https://tr.linkedin.com/" target="_blank"><FaLinkedin /></a>
            <a href="https://www.tiktok.com/" target="_blank"><FaTiktok /></a>
            <a href="https://www.youtube.com/" target="_blank"><FaYoutube /></a>
          </div>
        </div>

      </footer>

    </div>
  );
}

export default Layout;
