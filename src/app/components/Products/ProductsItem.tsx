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
    <div className='card bg-secondary mb-4 border border-solid  border-lightgray shadow-md'>
        <figure className='bg-cardBg'>
            <Link href={`/product/${productDetails.productCode}`}>
                <motion.img
                src={productDetails.productImageUrl}
                alt = {productDetails.productTitle}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
                className='object-fill h-48 w-96  rounded-2xl px-2 my-2'
                />
            </Link>
        </figure>

        <div className='card-body text-primary text-[14px] py-1 px-2'>
          <div>
          <Link href={`/product/${productDetails.productCode}`}> 
            <h6 className='card-title font-normal'>Tile: {productDetails.productTitle}</h6>
            </Link>
            <p className='text-[12px]'>Brand: {productDetails.productBrandName} ({productDetails.productCategoryName})</p>

          </div>
            
            <p className='text-[12px]'>Description: {productDetails.productDescription}</p>
            <div className='card-actions flex items-center justify-between'>
                <span className='text-xl underline'>Rs.{productDetails.productPrice}/-</span>
            </div>

        </div>
    </div>
  )
}

export default ProductsItem