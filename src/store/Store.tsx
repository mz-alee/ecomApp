import { configureStore } from '@reduxjs/toolkit';
import { CartSlice } from './Slices/CartSlice';
import { TestingSlice } from './Slices/TestingSlice';
import { FavSlice } from './Slices/FavSlice';
import { AuthSlices } from './Slices/AuthSlice';

export const store = configureStore({
  reducer: {
    cart: CartSlice.reducer,
    fav: FavSlice.reducer,
    auth: AuthSlices.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
