import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type CartState = {
  products: ProfileProducts[];
  isOpen: boolean;
  isPaying: boolean;
};

const initialState: CartState = {
  products: [],
  isOpen: false,
  isPaying: false
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<ProfileProducts>) => {
      const product = state.products.find(
        (product) => product.id === action.payload.id
      );

      if (!product) {
        state.products.push(action.payload);
      } else {
        alert('Prato já está no carrinho');
      }
    },
    remove: (state, action: PayloadAction<number>) => {
      state.products = state.products.filter(
        (product) => product.id !== action.payload
      );
    },
    open: (state) => {
      state.isOpen = true;
    },
    close: (state) => {
      state.isOpen = false;
    },
    startPayment: (state) => {
      state.isPaying = true;
    },
    cancelPayment: (state) => {
      state.isPaying = false;
    },
    clear: (state) => {
      state.products = [];
    }
  }
});

export const { add, remove, open, close, clear, startPayment, cancelPayment } =
  cartSlice.actions;

export default cartSlice.reducer;
