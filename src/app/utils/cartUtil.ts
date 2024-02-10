import { productDetailsType } from "../service/types/ProductTypes";
import { roundTodecimal } from "./roundTodecimal";

/**
 * The function responsible to handle calculation of items prices and update quantity for item in cart.
 * @param items The list of items in cart.
 * @param item The item changes to affect in cart.
 * @returns The list of updated items.
 */
export const handleCalculatePricesAndQuantity = (items: productDetailsType[], item:productDetailsType)=>{

    const isItemExist = items.find((product) => product.productCode === item.productCode)

    const updateCartItems = isItemExist ?
    items.map((itemObj)=>{
        return itemObj.productCode === item.productCode ? {...isItemExist, quantity:  isItemExist.quantity! + 1}: itemObj
    })
    : [...items, {...item, quantity: 1}]

    const {itemsPrice, taxPrice, shippingPrice, totalPrice} = calculatePrice(updateCartItems)

    return{
    items: updateCartItems,
    itemsPrice,
    taxPrice,
    shippingPrice,
    totalPrice
    }

}

/**
 * Below function is responsible to calculate itemsPrice, shippingPrice, taxPrice and totalPrice in cartStore.
 * @param items The list of items in cart.
 * @returns(object) The object of calculated prices i.e, itemsPrice, shippingPrice, taxPrice and totalPrice.
 */
const calculatePrice = (items: productDetailsType[])=>{
    const itemsPrice = roundTodecimal(
        items.reduce((acc, item)=> acc + item.productPrice * item.quantity!, 0)
    )

    const shippingPrice = roundTodecimal(itemsPrice > 1000 ? 0 : 100 )
    const taxPrice = roundTodecimal(Number(0.12 * itemsPrice))
    const totalPrice = roundTodecimal(itemsPrice + shippingPrice + taxPrice)

    return {itemsPrice, taxPrice, shippingPrice, totalPrice}

}
