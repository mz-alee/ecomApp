import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import Toast from 'react-native-toast-message';

export interface CartItem {
  id: number;
  title: string;
  price: number;
  quantity: number;
}

export interface CartState {
  items: CartItem[];
  totalPrice: number;
}

const initialState: CartState = {
  items: [],
  totalPrice: 0,
};

const total = (items: CartItem[]) =>
  items.reduce((total, item) => total + item.price * item.quantity, 0);

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
      state.totalPrice = total(state.items);
    },
    removeItem: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter(item => item.id !== action.payload);
      state.totalPrice = total(state.items);
    },
    increaseQty: (state, action: PayloadAction<number>) => {
      const existing = state.items.find(item => item.id === action.payload);
      if (existing) {
        existing.quantity += 1;
      }
      state.totalPrice = total(state.items);
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
      state.totalPrice = total(state.items);
    },
  },
});

export const { addItem, removeItem, increaseQty, decreaseQty } =
  CartSlice.actions;

export default CartSlice.reducer;
