'use client'
import React from "react";
import ProductsItem from "../../components/Products/ProductsItem";
import { getAllProductsQuery } from "../../service/queryServices/productQueryServices";
import LoadingAnimation from "../../components/LoadingAnimation/LoadingAnimation";

export const ProductHome = () => {
    const {isFetching, data: productData} = getAllProductsQuery()



    return (
      <div>
        {
           isFetching &&  <LoadingAnimation />
        }
        
        <div className="py-2 border-b border-slate-200 space-y-4 my-2">
          <h2 className="text-2xl font-semibold">Collections</h2>
        </div>
        
        <div className="grid grid-cols-4 gap-4 md:grid-cols-3 sm:grid-cols-1 text-secondary">
          {
            productData ?
            productData.map((product)=>{
  
              return(
                <ProductsItem key={product.productCode} productDetails={product}/>
              )
  
            })
            : <></>
          }
  
        </div>
      </div>
      
    )
}
