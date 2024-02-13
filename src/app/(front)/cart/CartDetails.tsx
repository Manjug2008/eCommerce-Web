'use client'
import React, { useEffect, useState } from 'react'
import useCartService from '../../lib/hooks/useCartStore'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

const CartDetails = () => {
    const router = useRouter()
    const {items, itemsPrice, taxPrice, shippingPrice, totalPrice, decrease, increase, initializeCart}= useCartService()
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
                                                    <img
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
                     

                    <div className='col-span-1 md:col-span-4 md:py-2'>
                      <div className='card bg-base-300 text-secondary'>
                        <div className='card-body'>
                            <ul>
                                <li>
                                    <div className='pb-1 text-[14px] flex justify-between items-center'>
                                        <div>subTotal ({items.reduce((acc, item)=> acc + item.quantity!, 0)}) : </div>
                                        <div>Rs.{itemsPrice}</div>
                                    </div>
                                </li>
                                <div className='divider bg-gray h-[2px]'/>

                                <li>
                                    <div className='pb-1 text-[14px] flex justify-between items-center'>
                                        <div>tax (12%) : </div>
                                        <div>Rs.{taxPrice}</div>
                                    </div>
                                </li>

                                <li>
                                    <div className='pb-1 text-[14px] flex justify-between items-center'>
                                        <div>shippingHandle : </div>
                                        <div>Rs.{shippingPrice}</div>
                                    </div>
                                </li>

                                <div className='divider bg-gray h-[2px]'/>

                                <li>
                                    <div className='pb-1 text-[14px] flex justify-between items-center'>
                                        <div>total : </div>
                                        <div>Rs.{totalPrice}</div>
                                    </div>
                                </li>

                                <li>
                                    <button
                                    onClick={()=>{
                                        initializeCart()
                                        router.push('/')
                                    }}
                                    className='btn btn-primary w-full mt-2'>
                                        Proceed to Checkout
                                    </button>
                                </li>
                            </ul>

                        </div>
                      </div>
                        
                    </div>

                </div>

            )
        }
    </div>
  )
}

export default CartDetails