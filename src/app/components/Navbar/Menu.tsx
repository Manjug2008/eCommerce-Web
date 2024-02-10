'use client'

import React, { useEffect, useState } from 'react'
import useCartService from '../../lib/hooks/useCartStore'
import Link from 'next/link'

const Menu = () => {
    const {items} = useCartService()
    const [isMounted, setIsMounted] = useState(false)

    useEffect(()=>{
        setIsMounted(true)
    },[])

  return (
    <div>
        <ul className='flex items-stretch'>
            <li>
                
                <div className='flex flex-row justify-center items-center gap-2'>
                    Cart
                    {
                        isMounted && items.length != 0 && (
                            <div className='badge badge-primary'>
                                {items.reduce((acc, item)=>acc + item.quantity!, 0)}{' '}

                            </div>
                        )
                    }
                </div>
            </li>

        </ul>
    </div>
  )
}

export default Menu