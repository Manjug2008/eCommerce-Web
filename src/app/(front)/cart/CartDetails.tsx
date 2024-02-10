'use client'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import useCartService from '../../lib/hooks/useCartStore'
import Link from 'next/link'
import Image from 'next/image'

const CartDetails = () => {
    const router = useRouter
    const {items, itemsPrice, decrease, increase}= useCartService()
    const [isMounted, setIsMounted] =useState(false)

    useEffect(()=>{
        setIsMounted(true)
    },[])

    if(!isMounted) return <></>


  return (
    <div>
        <h1 className='py-4 text-2xl '>Shopping Cart</h1>
        {
            items.length === 0 ?
            (
                <div>
                    Cart is empty. <Link href='/'> Go Shopping</Link>
                </div>
            )
            :(
                <div className='grid grid-cols-4 gap-5'>
                    <div className='overflow-x-auto col-span-4'>
                        <table className='table'>
                            <thead className='text-primary'>
                                <tr>
                                    <th>Item</th>
                                    <th>Quantity</th>
                                    <th>Price</th>
                                </tr>
                            </thead>

                            <tbody>
                                {
                                    items.map((itemObj)=>{
                                        return (
                                        <tr key={itemObj.productCode}>
                                            <td>
                                                <Link href={`/product/${itemObj.productCode}`} className='flex items-center'>
                                                    <Image
                                                    src={itemObj.productImageUrl}
                                                    alt = {itemObj.productTitle}
                                                    width={50}
                                                    height={50}
                                                    />
                                                    <span className='px-2'>{itemObj.productTitle}</span>
                                                </Link>
                                            </td>

                                            <td>
                                              <button className='h-[18px] w-[15px]  bg-primary text-secondary' type='button' onClick={()=>{decrease(itemObj)}}>-</button>
                                              <span className='px-2'>{itemObj.quantity}</span>
                                              <button className='h-[18px] w-[15px] bg-primary text-secondary' type='button' onClick={()=> increase(itemObj)}>+</button>
                                            </td>

                                            <td>Rs. {itemObj.productPrice}</td>
                                        </tr>
                                        )

                                    })
                                }
                            </tbody>

                        </table>

                    </div>

                </div>

            )
        }
    </div>
  )
}

export default CartDetails