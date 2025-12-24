import Layout from "../Layout/Layout.jsx";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/cartSlice";

function HairCare({ aramaMetni, setAramaMetni }) {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.cart?.allProducts) || [];

  // Filtreleme: Hem kategori eşleşmeli hem de isim arama metnini içermeli
  const filteredProducts = products.filter(item =>
    item.category === "HairCare" &&
    item.name.toLowerCase().includes(aramaMetni.toLowerCase())
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
                <span className="price-label">FIRSAT</span>
                <span className="product-price">{item.price}</span>
              </div>
              <button className="add-to-cart" onClick={() => dispatch(addToCart(item))}>
                Sepete Ekle
              </button>
            </div>
          ))
        ) : (
          <p style={{ padding: "20px" }}>Aradığınız ürün bulunamadı...</p>
        )}
      </div>
    </Layout>
  );
}

export default HairCare;