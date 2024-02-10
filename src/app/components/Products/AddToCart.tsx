'use client'

import React, { useEffect, useState } from 'react'
import { productDetailsType } from '../../service/types/ProductTypes'
import { useRouter } from 'next/navigation'
import useCartService from '../../lib/hooks/useCartStore'


interface AddToCartProps {
    item: productDetailsType
  }


const AddToCart = (props: AddToCartProps) => {
    const router = useRouter()
    const {item} = props
    const {items, increase, decrease} = useCartService()
    const [existItem, setExistItem] = useState<productDetailsType | undefined>()
    
    useEffect(()=>{
        setExistItem(items.find((itemObj)=> itemObj.productCode === item.productCode))
    },[item, items])

    
    const addToCartHandler = ()=>{
        increase(item)
    }

  return (
    <div>
        {
            existItem ? 
            (
                <div>
                    <button className='btn' type='button' onClick={()=>{decrease(existItem)}}>-</button>
                    <span className='px-2'>{existItem.quantity}</span>
                    <button className='btn' type='button' onClick={()=> increase(existItem)}>+</button>
                </div>
                
            )
            :(
                <button
                className='btn btn-primary w-full'
                type='button'
                onClick={addToCartHandler}>Add To Cart</button>
            )

        }
        
    </div> 
  )
}

export default AddToCart