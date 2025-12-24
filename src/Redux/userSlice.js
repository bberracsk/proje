import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: {
        currentUser: null, // Kayıt olan kullanıcı burada duracak
    },
    reducers: {
        registerUser: (state, action) => {
            state.currentUser = action.payload; // Formdan gelen veriyi kaydet
        },
    },
});

export const { registerUser } = userSlice.actions;
export default userSlice.reducer;