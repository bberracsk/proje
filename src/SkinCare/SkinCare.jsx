import React from "react";
import Layout from "../Layout/Layout"
function SkinCare() {
  const products = [
    {
      id: 1,
      name: "fffffffffff",
      price: "574,90 ₺",
      image: "https://via.placeholder.com/200"
    },
    {
      id: 2,
      name: "ggggggggggggggg",
      price: "499,00 ₺",
      image: "https://via.placeholder.com/200"
    },

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

export default SkinCare;