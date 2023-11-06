import { configureStore } from '@reduxjs/toolkit'
import CartSlice from '../redux/slices/CartSlice'


export const store= configureStore({
  reducer: {
    // key value pairs
    cart: CartSlice
    // name of slice and name of slice jsx file
  },
})
