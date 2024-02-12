import { apiClient } from "../networking/apiClient"
import { productDetailsType, productDetailsWithAboutCommentType } from "../types/ProductTypes"

/**
 * Function responsible to fetch list of products from API server
 * @returns List of products list
 */
export const getProductList = async (): Promise<productDetailsType[]> => {
    const response = await apiClient({
      method: 'get',
      url: `products`,
      params: {}
  
    })
    return response as unknown as productDetailsType[]
  }

/**
 * Function responsible to fetch product details from API server associated with productCode
 * @returns Product details
 */
export const getProductDetails = async (productCode: string): Promise<productDetailsWithAboutCommentType> => {
  const response = await apiClient({
    method: 'get',
    url: `products/${productCode}/details`,
    params: {}

  })
  return response as unknown as productDetailsWithAboutCommentType
}

/**
 * Function responsible to fetch product details from API server associated with categoryCode
 * @returns Product details
 */
export const getProductDetailsAssociatedWithCategoryCode = async (categoryCode: string): Promise<productDetailsType[]> => {
  const response = await apiClient({
    method: 'get',
    url: `products/category/${categoryCode}`,
    params: {}

  })
  return response as unknown as productDetailsType[]
}