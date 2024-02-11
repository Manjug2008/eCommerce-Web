import React from 'react'
import { productDetailsType } from '../../service/types/ProductTypes'
import Link from 'next/link'

interface ProductsItemProps {
    productDetails: productDetailsType
  }

const ProductsItem = (props: ProductsItemProps) => {
    const {productDetails} = props

  return (
    <div className='card bg-secondary mb-4 border border-solid shadow-md'>
        <figure className='bg-[#F2F1EF]'>
            <Link href={`/product/${productDetails.productCode}`}>
                <img
                src={productDetails.productImageUrl}
                alt = {productDetails.productTitle}
                width={10}
                height={10}
                className='object-cover h-auto w-full rounded-2xl px-2 my-4'
                />
            </Link>
        </figure>

        <div className='card-body text-primary'>
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