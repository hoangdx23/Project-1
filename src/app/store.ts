import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit"
 import productsReducer from"../toolkit/products/productsSlice"
import { productsApi } from "../toolkit/products/products.service"
import productsSlice from "../toolkit/products/productsSlice"
export const store = configureStore({
  reducer: {
    products:productsReducer,
    [productsApi.reducerPath]:productsApi.reducer,
    product:productsSlice
    
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(productsApi.middleware),
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
