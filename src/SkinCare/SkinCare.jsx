import Layout from "../Layout/Layout.jsx";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/cartSlice";

function SkinCare({ aramaMetni, setAramaMetni }) { // Parantez içine propları ekledik
  const dispatch = useDispatch();
  const products = useSelector((state) => state.cart?.allProducts) || [];

  // Hem SkinCare kategorisi olacak hem de isimde aramaMetni geçecek
  const filteredProducts = products.filter(item =>
    item.category === "SkinCare" &&
    item.name.toLowerCase().includes((aramaMetni || "").toLowerCase())
  );

  return (
    <Layout aramaMetni={aramaMetni} setAramaMetni={setAramaMetni}>
      <div className="product-grid">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((item) => (
            <div key={item.id} className="product-card">
              <img src={item.image} alt={item.name} className="product-image" />
              <h3 className="product-name">{item.name}</h3>
              <div className="price-container">
                <span className="price-label">FIRSAT ÜRÜNÜ</span>
                <span className="product-price">{item.price} ₺</span>
              </div>
              <button className="add-to-cart" onClick={() => dispatch(addToCart(item))}>
                Sepete Ekle
              </button>
            </div>
          ))
        ) : (
          <p style={{ padding: "20px" }}>Aradığınız cilt bakım ürünü bulunamadı...</p>
        )}
      </div>
    </Layout>
  );
}

export default SkinCare;