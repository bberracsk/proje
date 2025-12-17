import React from "react";
import Layout from "../Layout/Layout";
import "./Parfume.css"; // CSS dosyanı import etmeyi unutma

function Parfume() {
  // Örnek ürün listesi
  const products = [
    {
      id: 1,
      name: "zzzzzzzzzz",
      price: "574,90 ₺",
      image: "https://via.placeholder.com/200"
    },
    {
      id: 2,
      name: "xxxxxxx",
      price: "499,00 ₺",
      image: "https://via.placeholder.com/200"
    },
    {
      id: 3,
      name: "cccccccccccc",
      price: "659,00 ₺",
      image: "https://via.placeholder.com/200"
    },
    {
      id: 4,
      name: "vvvvvvvvvvvvvvvvv",
      price: "99,00 ₺",
      image: "https://via.placeholder.com/200"
    },
    {
      id: 5,
      name: "bbbbbbbbbbb",
      price: "574,90 ₺",
      image: "https://via.placeholder.com/200"
    },
    {
      id: 6,
      name: "nnnnnnnnnnnnnnnnnnn",
      price: "499,00 ₺",
      image: "https://via.placeholder.com/200"
    },
    {
      id: 7,
      name: "mmmmmmmmmmmmmmmmmmmm",
      price: "659,00 ₺",
      image: "https://via.placeholder.com/200"
    },
    {
      id: 8,
      name: "kkkkkkkkkkkkkkkk",
      price: "99,00 ₺",
      image: "https://via.placeholder.com/200"
    }
  ];

  return (
    <Layout>
      <div className="product-grid">
        {products.map((item) => (
          <div key={item.id} className="product-card">
            {/* Resim */}
            <img src={item.image} alt={item.name} className="product-image" />

            {/* İsim */}
            <h3 className="product-name">{item.name}</h3>

            {/* Fiyat Bölümü */}
            <div className="price-container">

              <span className="product-price">{item.price}</span>
            </div>

            {/* Buton */}
            <button className="add-to-cart">Sepete Ekle</button>
          </div>
        ))}
      </div>
    </Layout>
  );
}

export default Parfume;