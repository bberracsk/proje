import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Layout from "../Layout/Layout.jsx";
import { addToCart } from "../redux/cartSlice";
import { toggleFavorite } from "../redux/FavoritesSlice";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import "./HairCare.css"; // CSS dosyasını dahil ediyoruz

function HairCare({ aramaMetni, setAramaMetni }) {
  const { subCategory } = useParams();
  const dispatch = useDispatch();
  const products = useSelector((state) => state.cart?.allProducts) || [];
  const favorites = useSelector((state) => state.favorites?.items) || [];

  const filteredProducts = products.filter(item => {
    const categoryMatch = item.category === "HairCare";
    const subCategoryMatch = subCategory ? item.subCategory === subCategory : true;
    const searchMatch = item.name.toLowerCase().includes((aramaMetni || "").toLowerCase());

    return categoryMatch && subCategoryMatch && searchMatch;
  });

  return (
    <Layout aramaMetni={aramaMetni} setAramaMetni={setAramaMetni}>
      {/* Koşullu Başlık: Sadece ana sayfada görünür */}
      {!subCategory && (
        <h2 className="category-main-title">
          Tüm Saç Bakım Ürünleri
        </h2>
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
          <p className="no-products-message">Aradığınız ürün bulunamadı...</p>
        )}
      </div>
    </Layout>
  );
}

export default HairCare;