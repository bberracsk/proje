import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increaseQuantity, decreaseQuantity, removeFromCart } from "../redux/cartSlice";
import Layout from "../Layout/Layout";
import { FaTrash, FaPlus, FaMinus } from "react-icons/fa";
import "./Cart.css";

function Cart({ aramaMetni, setAramaMetni }) {
    const cartItems = useSelector((state) => state.cart.items);
    const dispatch = useDispatch();
    const [isCheckout, setIsCheckout] = useState(false);


    const safePrice = (price) => {
        if (typeof price === "number") return price;
        if (typeof price === "string") {

            const cleaned = price.replace(/[^\d.-]/g, "");
            return parseFloat(cleaned) || 0;
        }
        return 0;
    };

    const subTotal = cartItems.reduce(
        (acc, item) => acc + safePrice(item.price) * item.quantity,
        0
    );

    const shipping = subTotal > 500 || subTotal === 0 ? 0 : 34.99;
    const total = subTotal + shipping;

    return (
        <Layout aramaMetni={aramaMetni} setAramaMetni={setAramaMetni}>
            <div className="cart-page-container">
                <h1 className="cart-title">{isCheckout ? "Ödeme ve Teslimat" : "Sepetim"}</h1>

                {cartItems.length === 0 ? (
                    <div className="empty-cart-message">
                        <h2>Sepetiniz boş görünüyor.</h2>
                        <p>Hemen alışverişe başlayıp harika ürünler keşfedebilirsiniz!</p>
                    </div>
                ) : (
                    <div className="cart-main-content">
                        {/* Ürün Listesi veya Ödeme Formu */}
                        <div className="cart-items-section">
                            {!isCheckout ? (
                                cartItems.map((item) => (
                                    <div key={item.id} className="cart-item-card">
                                        <img src={item.image} alt={item.name} className="cart-item-img" />

                                        <div className="cart-item-details">
                                            <h3 className="cart-item-name">{item.name}</h3>
                                            <p className="cart-item-price">{item.price} ₺</p>
                                        </div>

                                        <div className="quantity-controls">
                                            <button className="qty-btn" onClick={() => dispatch(decreaseQuantity(item.id))}>
                                                <FaMinus size={10} />
                                            </button>
                                            <span className="qty-number">{item.quantity}</span>
                                            <button className="qty-btn" onClick={() => dispatch(increaseQuantity(item.id))}>
                                                <FaPlus size={10} />
                                            </button>
                                        </div>

                                        <button className="remove-btn" onClick={() => dispatch(removeFromCart(item.id))}>
                                            <FaTrash />
                                        </button>
                                    </div>
                                ))
                            ) : (
                                <div className="checkout-form-container">
                                    <h3>Teslimat Adresi</h3>
                                    <div className="form-group">
                                        <input type="text" placeholder="Ad Soyad" />
                                        <input type="text" placeholder="Telefon (05xx...)" />
                                        <input type="text" placeholder="Tam Adres" />
                                        <div className="form-row">
                                            <input type="text" placeholder="Şehir" className="flex-2" />
                                            <input type="text" placeholder="Posta Kodu" className="flex-1" />
                                        </div>
                                    </div>
                                    <button className="complete-order-btn">Siparişi Onayla ve Bitir</button>
                                    <button className="back-btn" onClick={() => setIsCheckout(false)}>Sepete Geri Dön</button>
                                </div>
                            )}
                        </div>


                        <aside className="cart-summary-section">
                            <h3>Sipariş Özeti</h3>
                            <div className="summary-row">
                                <span>Ara Toplam</span>
                                <span>{subTotal.toFixed(2)} ₺</span>
                            </div>
                            <div className="summary-row">
                                <span>Kargo</span>
                                <span>{shipping === 0 ? "Ücretsiz" : `${shipping.toFixed(2)} ₺`}</span>
                            </div>
                            <div className="summary-row total">
                                <span>Genel Toplam</span>
                                <span>{total.toFixed(2)} ₺</span>
                            </div>
                            {!isCheckout && (
                                <button className="checkout-btn" onClick={() => setIsCheckout(true)}>
                                    Alışverişi Tamamla
                                </button>
                            )}
                        </aside>
                    </div>
                )}
            </div>
        </Layout>
    );
}

export default Cart;