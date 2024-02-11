import { roundTodecimal } from "./roundTodecimal"

/**
 * The function to calculate product tax
 * @param productPrice 
 * @returns product tax price
 */
export const calculateProductTax = (productPrice : number)=>{
    return (roundTodecimal(Number(0.12 * productPrice)))
}

/**
 * The function to calculate product shipping charges
 * @param productPrice 
 * @returns product shipping charges
 */
export const calculateProductShippingCharges = (productPrice : number)=>{
    return (roundTodecimal(productPrice > 1000 ? 0 : 100 ))
}

/**
 * The function to calculate total price of a product
 * @param productPrice 
 * @returns product total amount
 */
export const calculateProductTotalAmount = (productPrice : number)=>{
    const shippingPrice = roundTodecimal(productPrice > 1000 ? 0 : 100 )
    const taxPrice = roundTodecimal(Number(0.12 * productPrice))

    return (roundTodecimal(productPrice + shippingPrice + taxPrice))
}