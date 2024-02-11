import React from 'react'
import { productDetailsType } from '../../service/types/ProductTypes'
import Link from 'next/link'
import { motion } from "framer-motion";

interface ProductsItemProps {
    productDetails: productDetailsType
  }


const ProductsItem = (props: ProductsItemProps) => {
    const {productDetails} = props

  return (
    <div className='card bg-secondary mb-4 border border-solid shadow-md'>
        <figure className='bg-cardBg'>
            <Link href={`/product/${productDetails.productCode}`}>
                <motion.img
                src={productDetails.productImageUrl}
                alt = {productDetails.productTitle}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
                className='object-cover h-auto w-full rounded-2xl px-2 my-4'
                />
            </Link>
        </figure>

        <div className='card-body text-primary text-[14px]'>
          <div>
          <Link href={`/product/${productDetails.productCode}`}> 
            <h4 className='card-title font-normal'>Tile: {productDetails.productTitle}</h4>
            </Link>
            <p className=''>Brand: {productDetails.productBrandName} ({productDetails.productCategoryName})</p>

          </div>
            
            <p className=''>Description: {productDetails.productDescription}</p>
            <div className='card-actions flex items-center justify-between'>
                <span className='text-xl underline'>Rs.{productDetails.productPrice}</span>
            </div>

        </div>
    </div>
  )
}

export default ProductsItem