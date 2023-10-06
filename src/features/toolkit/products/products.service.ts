import { createApi ,fetchBaseQuery} from '@reduxjs/toolkit/query/react'
// import { Iproduct } from './products.interface'
 export const productsApi = createApi({
    baseQuery : fetchBaseQuery ({baseUrl:'http://localhost:3001/posts'}),
    endpoints:builder=>({
        getProducts:builder.query({
            query:()=>''
        })
    })
})
export const{useGetProductsQuery}=productsApi;