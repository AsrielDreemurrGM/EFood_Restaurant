import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { ProfileProducts } from '../../types/products';

type CartState = {
  products: ProfileProducts[];
  isOpen: boolean;
};

const initialState: CartState = {
  products: [],
  isOpen: false
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
    }
  }
});

export const { add, remove, open, close } = cartSlice.actions;

export default cartSlice.reducer;
