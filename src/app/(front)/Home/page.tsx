'use client'
import React, { useEffect, useState } from "react";
import ProductsItem from "../../components/Products/ProductsItem";
import { getAllProductsQuery, getProductDetailsAssociatedWithCategoryQuery } from "../../service/queryServices/productQueryServices";
import LoadingAnimation from "../../components/LoadingAnimation/LoadingAnimation";
import FilterProductComponent from "./FilterProductComponent";
import useProductFilter from "../../lib/hooks/useProductFilter";

export const ProductHome = () => {
  const { brandFilter, filteredProductsList, productsList,
    categoryFilter, addIntialProductData, updateBrandFilters, updateCategoryFilters, updateFilteredProductList } = useProductFilter()
  const [categoryCode, setCategoryCode] = useState<string>()
  const [reAllotProducts, setReAllotProducts] = useState<boolean>(false)

  const { isFetching: productFetching, data: productData, refetch: fetchAllProducts } = getAllProductsQuery()
  const { isFetching: categoryFetching, data: categoryProductData, refetch: fetchFromCategory } = getProductDetailsAssociatedWithCategoryQuery(categoryCode!)


  useEffect(() => { fetchAllProducts() }, [])
  useEffect(() => { categoryCode && fetchFromCategory() }, [categoryCode])
  useEffect(() => { productData && addIntialProductData(productData) }, [productData])
  useEffect(() => { categoryProductData && updateFilteredProductList(categoryProductData) }, [categoryProductData])
  useEffect(() => { 
    if(reAllotProducts){
      setCategoryCode(undefined)
      updateFilteredProductList(productsList)
    }
  }, [reAllotProducts])


  const handleUpdateCategoryFilter = (categoryCode: string, checkState: boolean) => {
    setReAllotProducts(false)
    !checkState && console.log(productsList)
    checkState ? setCategoryCode(categoryCode) : setReAllotProducts(true)
    updateCategoryFilters(categoryCode, checkState)
  }


  return (
    <div>
      {
        productFetching || categoryFetching && <LoadingAnimation />
      }
      {
        filteredProductsList ?
          (
            <div>
              <div className="py-2 border-b border-slate-200 space-y-4 my-2">
                <h2 className="text-2xl font-semibold">Collections</h2>
              </div>


              <div className="grid grid-cols-6 gap-2 md:grid-cols-5">
                <div className="col-span-2 md:col-span-2">
                  <FilterProductComponent
                    categoryFilter={categoryFilter} brandFilters={brandFilter}
                    updateCategoryList={handleUpdateCategoryFilter} updateBrandList={updateBrandFilters} />
                </div>

                <div className="grid grid-cols-subgrid gap-4 col-span-4 md:col-span-3 md:gap-1 md:grid-cols-1">

                  {

                    filteredProductsList.map((product) => {
                      return (
                        <ProductsItem key={product.productCode} productDetails={product} />
                      )

                    })
                  }
                </div>

              </div>
            </div>
          )
          : null

      }

    </div>

  )
}
