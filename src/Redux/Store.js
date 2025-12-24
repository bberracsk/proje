import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './CartSlice';
import favoriteReducer from './FavoritesSlice'; // Favori slice'ını ekledik

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        favorites: favoriteReducer, // Burası Layout ve Sayfalardaki isimle aynı olmalı
    },
});