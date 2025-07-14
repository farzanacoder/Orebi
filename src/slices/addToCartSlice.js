import { createSlice } from '@reduxjs/toolkit'

export const addToCartSlice = createSlice({
  name: 'addToCart',
  initialState: {
    cartItem: [],
  },
  reducers: {
    addToCart: (state, action) => {

      let alldata = state.cartItem.find(item => item.basicTxt === action.payload.basicTxt)

      if (alldata) {
        alldata.quantity += 1
      } else {
        state.cartItem.push({ ...action.payload, quantity: 1 })
      }

    },
    increment: (state, action) => {
      state.cartItem.map(item => {
        if (item.basicTxt == action.payload.basicTxt) {
          item.quantity += 1
        }
      })

    },
    decrement: (state, action) => {
      state.cartItem.map(item => {
        if (item.basicTxt == action.payload.basicTxt) {
          if (item.quantity > 1) {
            item.quantity -= 1
          }
        }
      })

    },

  }
})

export const { addToCart, increment, decrement } = addToCartSlice.actions

export default addToCartSlice.reducer