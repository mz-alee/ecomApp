import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import Toast from 'react-native-toast-message';

export interface CartItem {
  id: number;
  title: string;
  // rating: number;
  price: number;
  // Image: string;
  quantity: number;
}

export interface CartState {
  items: CartItem[];
}

const initialState: CartState = {
  items: [],
};

export const CartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<CartItem>) => {
      const existing = state.items.find(item => item.id === action.payload.id);
      if (existing) {
        existing.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },
    removeItem: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
    increaseQty: (state, action: PayloadAction<number>) => {
      console.log('====================================');
      console.log('action', action);
      console.log('====================================');
      const existing = state.items.find(item => item.id === action.payload);
      if (existing) {
        existing.quantity += 1;
      }
    },
    decreaseQty: (state, action: PayloadAction<number>) => {
      const existing = state.items.find(item => item.id === action.payload);
      if (existing && existing.quantity > 1) {
        existing.quantity -= 1;
      } else {
        state.items = state.items.filter(item => item.id !== action.payload);
        Toast.show({
          type: 'success',
          text2: 'Product Removed From Cart👋',
        });
      }
    },
  },
});

export const { addItem, removeItem, increaseQty, decreaseQty } =
  CartSlice.actions;

export default CartSlice.reducer;
