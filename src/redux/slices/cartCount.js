import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  cartCount: 0,
}

export const counterSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state) => {
      state.cartCount += 1
    },
    removeFromCart: (state) => {
      state.cartCount -= 1
    },
  },
})


export const { addToCart, removeFromCart } = counterSlice.actions

export default counterSlice.reducer