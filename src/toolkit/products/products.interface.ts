export interface Iproduct{
    id:number,
    description:string,
    quantity:number,
    origin:string,
    name:string
    image:string
}
export interface ProductState{
    products: Iproduct[],
    currentPage: number, 
    itemsPerPage: number, 
}
export interface Search {
    searchTerm : string,
    products: Iproduct[],
}