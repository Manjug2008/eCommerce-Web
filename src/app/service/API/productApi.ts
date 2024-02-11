import { apiClient } from "../networking/apiClient"
import { productDetailsType } from "../types/ProductTypes"

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