import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Layout from '../Layout/Layout';
import { increaseQuantity, decreaseQuantity, removeFromCart } from '../Redux/CartSlice';
import { GrFormAdd, GrFormSubtract } from "react-icons/gr";
import "./Cart.css"; // CSS dosyanı içe aktardığından emin ol

function Cart() {
    const cartItems = useSelector((state) => state.cart.items);
    const dispatch = useDispatch();

    // Ödeme sayfasına geçişi kontrol eden state
    const [isCheckout, setIsCheckout] = useState(false);

    const totalPrice = cartItems.reduce((acc, item) => {
        const priceNum = parseFloat(item.price.replace(' ₺', '').replace('.', '').replace(',', '.'));
        return acc + (priceNum * item.quantity);
    }, 0);

    return (
        <Layout>
            <div className="cart-page-container">
                <h2 className="cart-title">{isCheckout ? "Ödeme Bilgileri" : "Sepetim"}</h2>

                {cartItems.length === 0 ? (
                    <div className="empty-cart-message">
                        <p>Sepetiniz şu an boş.</p>
                    </div>
                ) : (
                    <div className="cart-main-content">

                        {/* SOL TARAF */}
                        <div className="cart-left-section">
                            {!isCheckout ? (
                                <div className="cart-items-list">
                                    {cartItems.map((item) => (
                                        <div key={item.id} className="cart-item-card">
                                            <div className="cart-item-info">
                                                <img src={item.image} alt={item.name} className="cart-item-img" />
                                                <div className="cart-item-details">
                                                    <h4 className="cart-item-name">{item.name}</h4>
                                                    <p className="cart-item-price">{item.price}</p>
                                                </div>
                                            </div>

                                            <div className="quantity-controls">
                                                <button className="qty-btn" onClick={() => dispatch(decreaseQuantity(item.id))}>
                                                    <GrFormSubtract />
                                                </button>
                                                <span className="qty-number">{item.quantity}</span>
                                                <button className="qty-btn" onClick={() => dispatch(increaseQuantity(item.id))}>
                                                    <GrFormAdd />
                                                </button>
                                            </div>


                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <div className="checkout-form-container">
                                    <h3>Teslimat Bilgileri</h3>
                                    <div className="form-group">
                                        <input type="text" placeholder="Ad Soyad" />
                                        <input type="text" placeholder="Adres" />
                                        <div className="form-row">
                                            <input type="text" placeholder="Kart Numarası" className="flex-2" />
                                            <input type="text" placeholder="AA/YY" className="flex-1" />
                                            <input type="text" placeholder="CVV" className="flex-1" />
                                        </div>
                                    </div>
                                    <button className="complete-order-btn" onClick={() => alert("Sipariş Alındı!")}>
                                        Ödemeyi Tamamla ({totalPrice.toFixed(2)} ₺)
                                    </button>
                                    <button className="back-btn" onClick={() => setIsCheckout(false)}>
                                        Sepete Geri Dön
                                    </button>
                                </div>
                            )}
                        </div>

                        {/* SAĞ TARAF (ÖZET) */}
                        <div className="cart-summary-section">
                            <h3>Sipariş Özeti</h3>

                            <div className="summary-row total">
                                <span>Genel Toplam: </span>
                                <span>{totalPrice.toFixed(2)} ₺</span>
                            </div>

                            {!isCheckout && (
                                <button className="checkout-btn" onClick={() => setIsCheckout(true)}>
                                    Sepeti Onayla
                                </button>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </Layout>
    );
}

export default Cart;