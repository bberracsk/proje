import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom"; // Alt kategori için şart
import { addToCart } from "../redux/cartSlice";
import { toggleFavorite } from "../redux/FavoritesSlice";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import Layout from "../Layout/Layout.jsx";
import "./SkinCare.css"; // CSS dosyanı ayrıca oluşturmalısın

function SkinCare({ aramaMetni, setAramaMetni }) {
  const { subCategory } = useParams(); // URL'den parametreyi alır
  const dispatch = useDispatch();

  const products = useSelector((state) => state.cart?.allProducts) || [];
  const favorites = useSelector((state) => state.favorites?.items) || [];

  const filteredProducts = products.filter(item => {
    // 1. Ana kategori SkinCare olmalı
    const categoryMatch = item.category === "SkinCare";

    // 2. Alt kategori varsa ona göre, yoksa hepsi
    const subCategoryMatch = subCategory ? item.subCategory === subCategory : true;

    // 3. Arama filtresi
    const searchMatch = (item.name || "").toLowerCase().includes((aramaMetni || "").toLowerCase());

    return categoryMatch && subCategoryMatch && searchMatch;
  });

  return (
    <Layout aramaMetni={aramaMetni} setAramaMetni={setAramaMetni}>
      {/* Sadece ana cilt bakım sayfasındayken başlığı göster */}
      {!subCategory && (
        <h2 className="category-main-title">Tüm Cilt Bakım Ürünleri</h2>
      )}

      <div className="product-grid">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((item) => {
            const isFavorite = favorites.some(fav => fav.id === item.id);

            // FOTOĞRAF DÜZELTME: Resim yolunun başına her zaman '/' ekleyerek yolların bozulmasını önleriz
            const imagePath = item.image.startsWith('/') ? item.image : `/${item.image}`;

            return (
              <div key={item.id} className="product-card">
                <div className="product-image-container">
                  <img src={imagePath} alt={item.name} className="product-image" />
                  <div className="favorite-badge-icon" onClick={() => dispatch(toggleFavorite(item))}>
                    {isFavorite ? (
                      <FaHeart className="fav-icon filled" />
                    ) : (
                      <FaRegHeart className="fav-icon" />
                    )}
                  </div>
                </div>

                <h3 className="product-name">{item.name}</h3>

                <div className="price-container">
                  <span className="price-label">FIRSAT ÜRÜNÜ</span>
                  <span className="product-price">{item.price} ₺</span>
                </div>

                <button className="add-to-cart" onClick={() => dispatch(addToCart(item))}>
                  Sepete Ekle
                </button>
              </div>
            );
          })
        ) : (
          <p className="no-products-message">Aradığınız cilt bakım ürünü bulunamadı...</p>
        )}
      </div>
    </Layout>
  );
}

export default SkinCare;