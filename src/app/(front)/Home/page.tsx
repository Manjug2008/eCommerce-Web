'use client'
import React, { useEffect } from "react";
import ProductsItem from "../../components/Products/ProductsItem";
import { getAllProductsQuery } from "../../service/queryServices/productQueryServices";
import LoadingAnimation from "../../components/LoadingAnimation/LoadingAnimation";
import FilterProductComponent from "./FilterProductComponent";
import useProductFilter from "../../lib/hooks/useProductFilter";

export const ProductHome = () => {
  const {brandFilter, filteredProductsList, productsList, categoryFilter, addIntialProductData} = useProductFilter()
    
    const {isFetching, data: productData} = getAllProductsQuery()

    useEffect(()=>{
      productData && addIntialProductData(productData)
    },[productData])


    return (
      <div>
        {
           isFetching &&  <LoadingAnimation />
        }
        
        <div className="py-2 border-b border-slate-200 space-y-4 my-2">
          <h2 className="text-2xl font-semibold">Collections</h2>
        </div>
        
        
        <div className="grid grid-cols-6 gap-2 md:grid-cols-3">
        <div className="col-span-2 md:col-span-1">
          <FilterProductComponent categoryFilter={categoryFilter} brandFilters={brandFilter}/>
        </div>
        
          <div className="grid grid-cols-subgrid gap-4 col-span-4 md:col-span-2 md:gap-1 md:grid-cols-1">
          
          {
            filteredProductsList ?
            filteredProductsList.map((product)=>{
  
              return(
                <ProductsItem key={product.productCode} productDetails={product}/>
              )
  
            })
            : <></>
          }
          </div>
  
        </div>
      </div>
      
    )
}
