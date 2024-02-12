/** React query services */
import { useQuery } from "@tanstack/react-query"
import { getProductDetails, getProductDetailsAssociatedWithCategoryCode, getProductList } from "../API/productApi"
import { productDetailsWithAboutCommentType } from "../types/ProductTypes"
import { faL } from "@fortawesome/free-solid-svg-icons"

/**
 * Function to handle query to fetch all products from API
 */
export const getAllProductsQuery = ()=>{
    return useQuery(["productsList"], getProductList,{
        enabled:false
    })
}

/**
 * Function to handle query to fetch product details from API
 * @param productCode 
 * @returns product details
 */
export const getProductDetailsQuery = (productCode: string)=>{
    return useQuery(
        ["productsDetails", productCode],
            () => { return getProductDetails(productCode) },{
                enabled:false
            })
}

/**
 * Function to handle query to fetch product details from API based on category code
 * @param categoryCode 
 * @returns product details
 */
export const getProductDetailsAssociatedWithCategoryQuery = (categoryCode: string)=>{
    return useQuery(
        ["productsDetailsFromCategoryCode", categoryCode],
            () => { return getProductDetailsAssociatedWithCategoryCode(categoryCode) },{
                enabled:false
            })
}

