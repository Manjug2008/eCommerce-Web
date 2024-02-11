/** React query services */
import { useQuery } from "@tanstack/react-query"
import { getProductDetails, getProductList } from "../API/productApi"
import { productDetailsWithAboutCommentType } from "../types/ProductTypes"

/**
 * Function to handle query to fetch all products from API
 */
export const getAllProductsQuery = ()=>{
    return (useQuery(["productsList"], getProductList))
}

/**
 * Function to handle query to fetch product details from API
 * @param productCode 
 * @returns product details
 */
export const getProductDetailsQuery = (productCode: string)=>{
    return useQuery(
        ["productsDetails", productCode],
            () => { return getProductDetails(productCode) })
}