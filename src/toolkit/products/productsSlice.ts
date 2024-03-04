import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Iproduct, ProductState ,Search} from "./products.interface";
const initialState : ProductState={
    products:[],
    currentPage: 1, 
    itemsPerPage: 10, 

}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
// const initialStates :pagination={
//     currentPage: 1,
//     itemsPerPage: 10, 
// }
const productSlice = createSlice ({
    name:"products",
    initialState:initialState,
    reducers :{
        loadProducts:( state, action: PayloadAction<Iproduct[]>)=>{
            state.products= action.payload
        },
        setpage:(state, action:PayloadAction<number>)=>{
           state.currentPage = action.payload
        },
        searchName :(state, action:PayloadAction<Search>)=>{
            const searchName = action.payload.searchTerm 
            const filter = action.payload.products.filter(product=>product.name && product.name.toLowerCase().includes(searchName.toLowerCase()));
            state.products= filter;
    },
        deleteProduct:(state ,action:PayloadAction<Iproduct>)=>{
            state.products=state.products.filter(product=>product.id!==action.payload.id)
            console.log(state.products);
        },
        addProduct:(state,action:PayloadAction<Iproduct>)=>{
            console.log('add product', action.payload)
            state.products.push(action.payload)
        },
        editProduct:(state, action:PayloadAction<Iproduct>)=>{
            const findIndex= state.products.findIndex(product=>{
                console.log('vuon:b', product.id, action.payload.id, typeof product.id, typeof action.payload.id, product.id== action.payload.id)
               return product.id== action.payload.id
            })
            if (findIndex!=-1) {
                const dataClone =[...state.products]
                dataClone[findIndex]={
                    id:action.payload.id,
                    name:action.payload.name,
                    description:action.payload.description,
                    image:action.payload.image,
                    origin:action.payload.origin,
                    quantity:action.payload.quantity
                }
                console.log('state: ', JSON.parse(JSON.stringify(state.products)))
                state.products=dataClone
            }
        }
}
})
export const {loadProducts,setpage,searchName,deleteProduct,addProduct,editProduct}= productSlice.actions
export default productSlice.reducer;