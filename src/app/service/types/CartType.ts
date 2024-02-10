import { productDetailsType } from "./ProductTypes"

/**
 * The cartType model
 */
export type cartType = {
    items: productDetailsType[],
    itemsPrice: number,
    taxPrice: number,
    shippingPrice: number,
    totalPrice: number
    }
  