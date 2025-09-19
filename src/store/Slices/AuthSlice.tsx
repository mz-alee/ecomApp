import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
  token: string | null;
  user: any | null;
  loading: boolean;
  error: string | null;
}

const initialState: AuthState = {
  token: null,
  user: null,
  loading: false,
  error: null,
};

export const AuthSlices = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginStart: state => {
      state.loading = true;
      state.error = null;
    },
    loginSuccess: (
      state,
      action: PayloadAction<{ token: string; user: any }>,
    ) => {
      console.log('====================================');
      console.log('token', action);
      console.log('====================================');
      state.loading = false;
      state.token = action.payload.token;
      state.user = action.payload.user;
      state.error = null;
    },
    loginFail: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
    logout: state => {
      state.token = null;
      state.user = null;
      state.error = null;
    },
  },
});

export const { loginStart, loginSuccess, loginFail, logout } =
  AuthSlices.actions;

export default AuthSlices.reducer;
