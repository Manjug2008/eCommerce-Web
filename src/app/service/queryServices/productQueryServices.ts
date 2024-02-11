
import { useQuery } from "@tanstack/react-query"
import { getProductDetails, getProductList } from "../API/productApi"
import { productDetailsWithAboutCommentType } from "../types/ProductTypes"

export const getAllProductsQuery = ()=>{
    return (useQuery(["productsList"], getProductList))
}

// export const getProductDetailsQuery = (productCode: string)=>{
//     return (useQuery(["productsDetails", productCode],
//     () => { return getProductDetails(productCode)}))
// }

export const getProductDetailsQuery = (productCode: string)=>{
    return useQuery(
        ["productsDetails", productCode],
            () => { return getProductDetails(productCode) })
}

// const {isFetching,isError,error,refetch} = useQuery(
//     ["putUserProfileName", profileUnique],
//     () => { return putUserProfileRequest(profileUnique, userFullName, undefined); },
//     { enabled: false }
//   );