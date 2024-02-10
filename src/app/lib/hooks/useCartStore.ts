import {create} from 'zustand'
import {productDetailsType} from '../../service/types/ProductTypes'
import { cartType } from '../../service/types/CartType'
import { handleCalculatePricesAndQuantityDecrease, handleCalculatePricesAndQuantityIncrease } from '../../utils/cartUtil'


const initialState: cartType={
    items: [],
    itemsPrice: 0,
    taxPrice: 0,
    shippingPrice: 0,
    totalPrice: 0
}

export const cartStore = create<cartType>(()=>initialState)

/**
 * Below is custom hook to handle cart items
 * Functionality to Update quantity of product and handle calculating product price, taxes, shipping price and total price of product
 * @returns Updated cart details
 */
export default function useCartService(){
    const {items, itemsPrice, taxPrice, shippingPrice, totalPrice} = cartStore()

    return{
        items, 
        itemsPrice,
        taxPrice,
        shippingPrice,
        totalPrice,
        increase: (item: productDetailsType)=>{
            cartStore.setState(handleCalculatePricesAndQuantityIncrease(items, item))
        },
        decrease: (item: productDetailsType)=>{
            cartStore.setState(handleCalculatePricesAndQuantityDecrease(items, item)!)
        }

    }
}