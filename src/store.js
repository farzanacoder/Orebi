import { configureStore } from '@reduxjs/toolkit'
import addToCartReducer from './slices/addToCartSlice'
import breadbuttonReducer from './slices/breadcrumb'
import categoryReducer from './slices/categorySlice'
import counterReducer from './slices/counterSlice'



export default configureStore({
  reducer: {
    counter: counterReducer,
    bread: breadbuttonReducer,
    category: categoryReducer,
    addToCart: addToCartReducer,

  }
})