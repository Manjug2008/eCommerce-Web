
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

/**
 * The model to handle product details from API response
 */
export type productAboutCommentType = {
  aboutProductDescription: string
  }

/**
 * The model to handle product details from API response
 */
export type productDetailsWithAboutCommentType = {
  productBrandCode: string,
  productBrandName: string,
  productCategoryCode: string,
  productCategoryName: string,
  productCode: string,
  productTitle: string,
  productDescription: string,
  productImageUrl: string,
  productPrice: number,
  aboutProduct: productAboutCommentType[]
  }