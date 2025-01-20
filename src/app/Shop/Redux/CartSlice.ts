'use client';

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CartItem {
    id: string;
    title: string;
    description: string;
    image: string;
}

interface CartState {
    items: CartItem[];
}

const initialState: CartState = {
    items: []
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addtoCart: (state, action: PayloadAction<CartItem>) => {
            console.log('Adding to cart:', action.payload); // Debug log
            state.items.push(action.payload);
        },
        remove: (state, action: PayloadAction<string>) => {
            state.items = state.items.filter((item) => item.id !== action.payload);
        },
        setProducts: (state, action: PayloadAction<CartItem[]>) => {
            state.items = action.payload;
          },
    },
});

export const { addtoCart, remove ,setProducts} = cartSlice.actions;
export default cartSlice.reducer;


