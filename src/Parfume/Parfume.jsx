import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom"; // Alt kategoriler için gerekli
import { addToCart } from "../redux/cartSlice";
import { toggleFavorite } from "../redux/FavoritesSlice";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import Layout from "../Layout/Layout.jsx";
import "./Parfume.css";

function Parfume({ aramaMetni, setAramaMetni }) {
  const { subCategory } = useParams(); // URL'den alt kategoriyi alıyoruz
  const dispatch = useDispatch();

  const products = useSelector((state) => state.cart?.allProducts) || [];
  const favorites = useSelector((state) => state.favorites?.items) || [];

  const filteredProducts = products.filter(item => {
    // 1. Ana kategori Parfüm olmalı
    const categoryMatch = item.category === "Parfume";

    // 2. Alt kategori seçiliyse (Kadın/Erkek) ona uymalı, seçili değilse hepsi gelmeli
    const subCategoryMatch = subCategory ? item.subCategory === subCategory : true;

    // 3. Arama kutusu doluysa isme göre filtrele
    const searchMatch = item.name.toLowerCase().includes((aramaMetni || "").toLowerCase());

    return categoryMatch && subCategoryMatch && searchMatch;
  });

  return (
    <Layout aramaMetni={aramaMetni} setAramaMetni={setAramaMetni}>
      {/* Sadece ana Parfüm sayfasındaysa başlığı göster */}
      {!subCategory && (
        <h2 className="category-main-title">Tüm Parfümler</h2>
      )}

      <div className="product-grid">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((item) => {
            const isFavorite = favorites.some(fav => fav.id === item.id);
            return (
              <div key={item.id} className="product-card">
                <div className="product-image-container">
                  <img src={item.image} alt={item.name} className="product-image" />
                  <div
                    className="favorite-badge-icon"
                    onClick={() => dispatch(toggleFavorite(item))}
                  >
                    {isFavorite ? (
                      <FaHeart className="fav-icon filled" />
                    ) : (
                      <FaRegHeart className="fav-icon" />
                    )}
                  </div>
                </div>

                <h3 className="product-name">{item.name}</h3>

                <div className="price-container">
                  <span className="product-price">{item.price} ₺</span>
                </div>

                <button
                  className="add-to-cart"
                  onClick={() => dispatch(addToCart(item))}
                >
                  Sepete Ekle
                </button>
              </div>
            );
          })
        ) : (
          <p className="no-products-message">Aradığınız parfüm bulunamadı...</p>
        )}
      </div>
    </Layout>
  );
}

export default Parfume;