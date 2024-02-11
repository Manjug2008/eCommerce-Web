import { useQuery } from "@tanstack/react-query"
import { getProductList } from "../API/productApi"

export const getAllProductsQuery = ()=>{
    return (useQuery(["productsList"], getProductList))
}