import { createApi ,fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import { Iproduct } from './products.interface';
// import { Iproduct } from './products.interface'
 export const productsApi = createApi({
    baseQuery : fetchBaseQuery ({baseUrl:'http://localhost:3000/posts'}),
    endpoints:builder=>({
        getProducts:builder.query({
            query:()=>''
        }),
        deleteProduct:builder.mutation<Iproduct[],Iproduct>({
            query:({id})=>({
                url:`/${id}`,
                method:'DELETE'
            })
        }),
        addProducts:builder.mutation<Iproduct[],Iproduct>({
            query:(product)=>({
                url:``,
                method:'POST',
                body:product
            })
        }),
        editProducts:builder.mutation<Iproduct[],Iproduct>({
            query:(params)=>{
                const {id, ...product}=params
                return {
                url:`/${id}`,
                method:'PUT',
                body:product
            }}
        })

    })
})
export const{useGetProductsQuery,useDeleteProductMutation,useAddProductsMutation,useEditProductsMutation}=productsApi;