import Layout from "../Layout/Layout.jsx";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import { toggleFavorite } from "../redux/FavoritesSlice"; // Bunu oluşturman gerekecek
import { useParams } from "react-router-dom";
import { FaHeart, FaRegHeart } from "react-icons/fa";

function MakeUp({ aramaMetni, setAramaMetni }) {
  const { subCategory } = useParams();
  const dispatch = useDispatch();

  const products = useSelector((state) => state.cart?.allProducts) || [];
  const favorites = useSelector((state) => state.favorites?.items) || [];

  const filteredProducts = products.filter(item => {
    const kategoriUygun = item.category === "MakeUp";
    const altKategoriUygun = subCategory ? item.subCategory === subCategory : true;
    const aramaUygun = item.name.toLowerCase().includes(aramaMetni.toLowerCase());
    return kategoriUygun && altKategoriUygun && aramaUygun;
  });

  return (
    <Layout aramaMetni={aramaMetni} setAramaMetni={setAramaMetni}>
      <div className="product-grid">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((item) => {
            const isFavorite = favorites.some(fav => fav.id === item.id);
            return (
              <div key={item.id} className="product-card">
                <div className="product-image-container">
                  <img src={item.image} alt={item.name} className="product-image" />
                  {/* Favori Kalp Butonu */}
                  <div
                    className="favorite-badge-icon"
                    onClick={() => dispatch(toggleFavorite(item))}
                  >
                    {isFavorite ? <FaHeart color="#b4036d" /> : <FaRegHeart color="#b4036d" />}
                  </div>
                </div>

                <h3 className="product-name">{item.name}</h3>
                <div className="price-container">
                  <span className="price-label">YENİ ÜRÜN</span>
                  <span className="product-price">{item.price}</span>
                </div>
                <button className="add-to-cart" onClick={() => dispatch(addToCart(item))}>
                  Sepete Ekle
                </button>
              </div>
            );
          })
        ) : (
          <p style={{ padding: "20px" }}>Aradığınız kriterlere uygun ürün bulunamadı...</p>
        )}
      </div>
    </Layout>
  );
}

export default MakeUp;