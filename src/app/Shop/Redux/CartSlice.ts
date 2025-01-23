'use client';

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CartItem {
    id: string;
    title: string;
    description: string;
    image: string;
    quantity:number
    name:string
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
            const existingItem = state.items.find(item => item.id === action.payload.id);
            if (existingItem) {
                // If item exists, increase quantity
                existingItem.quantity += 1;
              } else {
                // If not, add the item with quantity = 1
                state.items.push({ ...action.payload, quantity: 1 });
              }
            // state.items.push(action.payload);
        },
        remove: (state, action: PayloadAction<string>) => {
            const existingItem = state.items.find(item => item.id === action.payload);
            if (existingItem) {
              if (existingItem.quantity > 1) {
                // Decrease quantity if more than 1
                existingItem.quantity -= 1;
              } else {
                // Remove item if quantity is 1
                state.items = state.items.filter(item => item.id !== action.payload);
              }
            }
            // state.items = state.items.filter((item) => item.id !== action.payload);
        },
        setProducts: (state, action: PayloadAction<CartItem[]>) => {
            state.items = action.payload;
          },
    },
});

export const { addtoCart, remove ,setProducts} = cartSlice.actions;
export default cartSlice.reducer;


