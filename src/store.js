import { configureStore } from '@reduxjs/toolkit'
import counterSlice from './Slices/CounterSlice'
import breadbutton from './slices/breadcrumb'
import categorySlice from './slices/categorySlice'
import addToCartSlice from './slices/addToCartSlice'

export default configureStore({
  reducer: {
    counter: counterSlice,
    bread: breadbutton,
    category: categorySlice,
    addToCart: addToCartSlice,

  }
})