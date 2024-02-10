
/**
 * The model to handle product details from API response
 */
export type productDetailsType = {
  productBrandCode: string,
  productBrandName: string,
  productCategoryCode: string,
  productCategoryName: string,
  productCode: string,
  productTitle: string,
  productDescription: string,
  productImageUrl: string,
  productPrice: number,
  quantity?: number
  }