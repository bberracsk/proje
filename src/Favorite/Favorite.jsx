import Layout from "../Layout/Layout.jsx";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import { toggleFavorite } from "../redux/FavoritesSlice";
import { FaTrash } from "react-icons/fa";

function Favorite({ aramaMetni, setAramaMetni }) {
    const dispatch = useDispatch();
    const favoriteItems = useSelector((state) => state.favorites.items);

    return (
        <Layout aramaMetni={aramaMetni} setAramaMetni={setAramaMetni}>
            <div className="favorites-container" style={{ padding: "40px" }}>
                <h2 style={{ color: "#b4036d", marginBottom: "20px" }}>
                    Favorilerim {favoriteItems.length > 0 ? `(${favoriteItems.length})` : ""}
                </h2>

                {favoriteItems.length > 0 ? (
                    <div className="product-grid">
                        {favoriteItems.map((item) => (
                            <div key={item.id} className="product-card">
                                <div className="product-image-container">
                                    <img src={item.image} alt={item.name} className="product-image" />
                                    <div className="favorite-badge-icon" onClick={() => dispatch(toggleFavorite(item))}>
                                        <FaTrash color="#b4036d" size={14} />
                                    </div>
                                </div>
                                <h3 className="product-name">{item.name}</h3>
                                <div className="price-container">
                                    <span className="product-price">{item.price} ₺</span>
                                </div>
                                <button className="add-to-cart" onClick={() => dispatch(addToCart(item))}>
                                    Sepete Ekle
                                </button>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p>Favori ürününüz bulunmamaktadır.</p>
                )}
            </div>
        </Layout>
    );
}

export default Favorite;