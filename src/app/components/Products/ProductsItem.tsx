import React from 'react'
import { productDetailsType } from '../../service/types/ProductTypes'
import Image from 'next/image'
import Link from 'next/link'

interface ProductsItemProps {
    productDetails: productDetailsType
  }

const ProductsItem = (props: ProductsItemProps) => {
    const {productDetails} = props

  return (
    <div className='card bg-base-300 shadow-xl mb-4'>
        <figure>
            <Link href={`/product/${productDetails.productCode}`}>
                <Image
                src={productDetails.productImageUrl}
                alt = {productDetails.productTitle}
                width={300}
                height={300}
                className='object-cover h-64 w-full'
                />
            </Link>
        </figure>

        <div className='card-body'>
            <Link href={`/product/${productDetails.productCode}`}> 
            <h2 className='card-title font-normal'>{productDetails.productTitle}</h2>
            </Link>
            <p className='mb-2'>{productDetails.productBrandName}</p>
            <div className='card-actions flex items-center justify-between'>
                <span className='text-xl'>Rs.{productDetails.productPrice}</span>
            </div>

        </div>
    </div>
  )
}

export default ProductsItem