export interface Iproduct{
    id:number,
    description:string,
    quantity:string,
    origin:string,
    name:string
}
export interface ProductState{
    products: Iproduct[]
}