import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        allProducts: [
            // SkinCare (5 Ürün)
            { id: 1, name: "Yüz Yıkama Jeli", price: "150,00 ₺", category: "SkinCare", image: "images/images.jpeg" },
            { id: 2, name: "Nemlendirici Krem", price: "499,00 ₺", category: "SkinCare", image: "images/images.jpeg" },
            { id: 3, name: "Güneş Kremi 50 SPF", price: "320,00 ₺", category: "SkinCare", image: "images/images.jpeg" },
            { id: 4, name: "C Vitamini Serumu", price: "450,00 ₺", category: "SkinCare", image: "images/images.jpeg" },
            { id: 5, name: "Göz Altı Kremi", price: "280,00 ₺", category: "SkinCare", image: "images/images.jpeg" },

            // HairCare (5 Ürün)
            { id: 6, name: "Besleyici Şampuan", price: "120,00 ₺", category: "HairCare", image: "images/images.jpeg" },
            { id: 7, name: "Onarıcı Saç Kremi", price: "145,00 ₺", category: "HairCare", image: "images/images.jpeg" },
            { id: 8, name: "Argan Saç Maskesi", price: "210,00 ₺", category: "HairCare", image: "images/images.jpeg" },
            { id: 9, name: "Dökülme Karşıtı Serum", price: "390,00 ₺", category: "HairCare", image: "images/images.jpeg" },
            { id: 10, name: "Saç Şekillendirici Köpük", price: "115,00 ₺", category: "HairCare", image: "images/images.jpeg" },

            // MakeUp (5 Ürün)
            { id: 11, name: "Kırmızı Ruj", price: "200,00 ₺", category: "MakeUp", image: "images/images.jpeg" },
            { id: 12, name: "Siyah Maskara", price: "240,00 ₺", category: "MakeUp", image: "images/images.jpeg" },
            { id: 13, name: "Likit Kapatıcı", price: "185,00 ₺", category: "MakeUp", image: "images/images.jpeg" },
            { id: 14, name: "Mat Fondöten", price: "430,00 ₺", category: "MakeUp", image: "images/images.jpeg" },
            { id: 15, name: "Allık Paleti", price: "310,00 ₺", category: "MakeUp", image: "images/images.jpeg" },

            // Parfume (5 Ürün)
            { id: 16, name: "Odunsu Erkek Parfümü", price: "850,00 ₺", category: "Parfume", image: "images/images.jpeg" },
            { id: 17, name: "Çiçeksi Kadın Parfümü", price: "920,00 ₺", category: "Parfume", image: "images/images.jpeg" },
            { id: 18, name: "Okyanus Esintili EDP", price: "740,00 ₺", category: "Parfume", image: "images/images.jpeg" },
            { id: 19, name: "Vanilya Özlü Parfüm", price: "680,00 ₺", category: "Parfume", image: "images/images.jpeg" },
            { id: 20, name: "Amber Gece Kokusu", price: "1.100,00 ₺", category: "Parfume", image: "images/images.jpeg" },
        ],
        items: [],
    },
    reducers: {
        addToCart: (state, action) => {
            const existingItem = state.items.find(item => item.id === action.payload.id);
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                state.items.push({ ...action.payload, quantity: 1 });
            }
        },
        increaseQuantity: (state, action) => {
            const item = state.items.find(item => item.id === action.payload);
            if (item) item.quantity += 1;
        },
        decreaseQuantity: (state, action) => {
            const item = state.items.find(item => item.id === action.payload);
            if (item && item.quantity > 1) {
                item.quantity -= 1;
            } else {
                state.items = state.items.filter(item => item.id !== action.payload);
            }
        },
        removeFromCart: (state, action) => {
            state.items = state.items.filter(item => item.id !== action.payload);
        }
    },
});

export const { addToCart, increaseQuantity, decreaseQuantity, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;