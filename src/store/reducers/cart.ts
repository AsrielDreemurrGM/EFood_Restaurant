import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { ProfileProducts } from '../../types/products';

type CartState = {
  products: ProfileProducts[];
};

const initialState: CartState = {
  products: []
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<ProfileProducts>) => {
      state.products.push(action.payload);
    }
  }
});

export const { add } = cartSlice.actions;

export default cartSlice.reducer;
