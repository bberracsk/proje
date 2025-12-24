import React from "react";
import Layout from "../Layout/Layout.jsx";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import { toggleFavorite } from "../redux/FavoritesSlice";
import { FaTrash, FaShoppingCart } from "react-icons/fa";
import "./Favorite.css";

function Favorite({ aramaMetni, setAramaMetni }) {
    const dispatch = useDispatch();
    const favoriteItems = useSelector((state) => state.favorites.items);

    return (
        <Layout aramaMetni={aramaMetni} setAramaMetni={setAramaMetni}>
            <div className="fav-page-container">
                <h1 className="fav-title">Favorilerim</h1>

                {favoriteItems.length === 0 ? (
                    <div className="empty-fav-message">
                        <h2>Henüz favori ürününüz yok.</h2>
                        <p>Beğendiğiniz ürünleri kalp ikonuna tıklayarak buraya ekleyebilirsiniz!</p>
                    </div>
                ) : (
                    <div className="fav-main-content">
                        {/* Sol Kısım: Favori Ürün Kartları */}
                        <div className="fav-items-section">
                            {favoriteItems.map((item) => (
                                <div key={item.id} className="fav-item-card">
                                    <img src={item.image} alt={item.name} className="fav-item-img" />

                                    <div className="fav-item-details">
                                        <h3 className="fav-item-name">{item.name}</h3>
                                        <p className="fav-item-price">{item.price} ₺</p>
                                    </div>

                                    <div className="fav-actions">
                                        <button
                                            className="fav-add-to-cart-btn"
                                            onClick={() => dispatch(addToCart(item))}
                                        >
                                            <FaShoppingCart style={{ marginRight: "8px" }} />
                                            Sepete Ekle
                                        </button>

                                        <button
                                            className="fav-remove-btn"
                                            onClick={() => dispatch(toggleFavorite(item))}
                                        >
                                            <FaTrash />
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>


                    </div>
                )}
            </div>
        </Layout>
    );
}

export default Favorite;