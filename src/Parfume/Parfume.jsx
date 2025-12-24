import Layout from "../Layout/Layout.jsx";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import "./Parfume.css";

function Parfume({ aramaMetni, setAramaMetni }) { // Parantez içine propları ekledik
  const dispatch = useDispatch();
  const products = useSelector((state) => state.cart?.allProducts) || [];

  // Hem Parfume kategorisi olacak hem de isimde aramaMetni geçecek
  const filteredProducts = products.filter(item =>
    item.category === "Parfume" &&
    item.name.toLowerCase().includes((aramaMetni || "").toLowerCase())
  );

  return (
    <Layout aramaMetni={aramaMetni} setAramaMetni={setAramaMetni}>
      <div className="product-grid">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((item) => (
            <div key={item.id} className="product-card">
              <div>
                <img src={item.image} alt={item.name} className="product-image" />
                <h3 className="product-name">{item.name}</h3>
              </div>
              <div>
                <div className="price-container">
                  <span className="price-label">KALICI KOKU</span>
                  <span className="product-price">{item.price}</span>
                </div>
                <button className="add-to-cart" onClick={() => dispatch(addToCart(item))}>
                  Sepete Ekle
                </button>
              </div>
            </div>
          ))
        ) : (
          <p style={{ padding: "20px" }}>Aradığınız parfüm bulunamadı...</p>
        )}
      </div>
    </Layout>
  );
}

export default Parfume;