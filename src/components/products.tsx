/* eslint-disable react-hooks/exhaustive-deps */
import { useDispatch, useSelector } from "react-redux"
import { useGetProductsQuery } from "../features/toolkit/products/products.service";
import { useEffect } from "react";
import { loadProducts } from "../features/toolkit/products/productsSlice";
import { Iproduct } from "../features/toolkit/products/products.interface";
import { RootState } from "../app/store";
const Product =()=>{
    const dispatch= useDispatch();
    const {data:productList,isError,isLoading ,isSuccess:productSuccess }= useGetProductsQuery(null);
    const  productState = useSelector((state:RootState)=>state.products.products);
    // console.log(productState);
    useEffect(()=>{
        if (productSuccess) {
            dispatch(loadProducts(productList))
        }
    },[productSuccess])
    if (isLoading) {
        return <p>
            ...loading
        </p>
    }
    if (isError) {
        return <p>
            ...error
        </p>
    }
    return (
        <div>
            <table>
            <tr>
                    <td>ID</td>
                    <td>Name</td>
                    <td>Description</td>
                    <td>Quantity</td>
                    <td>Origin</td>
                    <td>Action</td>
                </tr>
                {(productState as Iproduct[]|[]).map(product=>{
                    return <tr key={product.id}>
                        <td>{product.id}</td>
                        <td>{product.name}</td>
                        <td>{product.description}</td>
                        <td>{product.origin}</td>
                        <td>{product.quantity}</td>
                        <td><button>a</button></td>
                    </tr>
                })}
            </table>
        </div>
    )
}
export default Product;