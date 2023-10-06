import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Iproduct, ProductState } from "./products.interface";

const initialState : ProductState={
    products:[]
}
const productSlice = createSlice ({
    name:"products",
    initialState:initialState,
    reducers :{
        loadProducts:( state, action: PayloadAction<Iproduct[]>)=>{
            state.products= action.payload
        }
    }
})
export const {loadProducts}= productSlice.actions
export default productSlice.reducer;