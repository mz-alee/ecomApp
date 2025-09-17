import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import Toast from 'react-native-toast-message';

export interface favItem {
  id: number;
  title: string;
  // rating: number;
  price: number;
  // Image: string;
  quantity: number;
}

export interface CartState {
  items: favItem[];
}

const initialState: CartState = {
  items: [],
};

export const FavSlice = createSlice({
  name: 'fav',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<favItem>) => {
      const existingItem = state.items.find(
        item => item.id === action.payload?.id,
      );
      if (existingItem) {
        Toast.show({
          type: 'success',
          text2: 'Product is already added',
        });
        return;
      }
      state.items.push(action.payload);
    },
    removeItem: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
  },
});

export const { addItem, removeItem } = FavSlice.actions;

export default FavSlice.reducer;
