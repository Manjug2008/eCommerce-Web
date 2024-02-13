'use client'
import React, { useEffect, useState } from "react";
import ProductsItem from "../../components/Products/ProductsItem";
import { getAllProductsQuery, getProductDetailsAssociatedWithCategoryQuery } from "../../service/queryServices/productQueryServices";
import LoadingAnimation from "../../components/LoadingAnimation/LoadingAnimation";
import FilterProductComponent from "./FilterProductComponent";
import useProductFilter from "../../lib/hooks/useProductFilter";
import SliderComponent from "../../components/Slider/SliderComponent";

export const ProductHome = () => {
  const { brandFilter, filteredProductsList, productsList, categoryFilter, priceFilter,
    addIntialProductData, updateBrandFilters, updateCategoryFilters,
    updateFilteredProductList, updatePriceFilters, filterProductData } = useProductFilter()
  const [categoryCode, setCategoryCode] = useState<string>()
  const [brandCode, setBrandCode] = useState<string>()
  const [priceUnique, setPriceUnique] = useState<number>(0)
  const [reAllotProducts, setReAllotProducts] = useState<boolean>(false)
  const [reAllotBrands, setReAllotBrands] = useState<boolean>(false)
  const [reAllotPrice, setReAllotPrice] = useState<boolean>(false)

  const { isFetching: productFetching, data: productData, refetch: fetchAllProducts } = getAllProductsQuery()
  const { isFetching: categoryFetching, data: categoryProductData, refetch: fetchFromCategory } = getProductDetailsAssociatedWithCategoryQuery(categoryCode!)


  useEffect(() => { fetchAllProducts() }, [])
  useEffect(() => { categoryCode && fetchFromCategory() }, [categoryCode])
  useEffect(() => { productData && addIntialProductData(productData) }, [productData])
  useEffect(() => { categoryProductData && updateFilteredProductList(categoryProductData, priceUnique) }, [categoryProductData])

  useEffect(() => {
    (brandCode || priceUnique > 0) && filterProductData(priceUnique, brandCode, categoryCode)
  }, [brandCode, priceUnique])

  useEffect(() => {
    if (reAllotProducts) {
      setCategoryCode(undefined)
      setBrandCode(undefined)
      setPriceUnique(0)
      filterProductData(priceUnique, undefined, undefined)
    }

    if (reAllotBrands) {
      setReAllotBrands(false)
      setBrandCode(undefined)
      filterProductData(priceUnique, undefined, categoryCode)
    }

    if (reAllotPrice) {
      console.log('manju')
      setReAllotPrice(false)
      setPriceUnique(0)
      filterProductData(0, brandCode, categoryCode)
    }
  }, [reAllotProducts, reAllotBrands, reAllotPrice])




  /**
   * Function responsible to handle category filters
   * Also if checkBox state is false the rollBack productList data to its origin
   * @param categoryCode 
   * @param checkState 
   * @returns null
   */
  const handleUpdateCategoryFilter = (categoryCode: string, checkState: boolean) => {
    setReAllotProducts(false)
    checkState ? setCategoryCode(categoryCode) : setReAllotProducts(true)
    updateCategoryFilters(categoryCode, checkState)
  }

  /**
   * Function responsible to handle brand filters
   * @param brandCode 
   * @param checkState 
   * @returns null
   */
  const handleUpdateBrandFilter = (brandCode: string, checkState: boolean) => {
    checkState ? setBrandCode(brandCode) : setReAllotBrands(true)
    updateBrandFilters(brandCode, checkState)
  }

  /**
   * Function responsible to handle price filters
   * @param priceUnique 
   * @param checkState 
   * @returns null
   */
  const handlePriceFilter = (priceUnique: number, checkState: boolean) => {
    checkState ? setPriceUnique(priceUnique) : setReAllotPrice(true)
    updatePriceFilters(priceUnique, checkState)
  }

  return (
    <div>
      {
        productFetching
          ? <LoadingAnimation />
          : categoryFetching
            ? <LoadingAnimation />
            : null

      }
      {
        filteredProductsList ?
          (
            <div>
              <SliderComponent />
              <div className="border-b border-slate-200  mb-2" />

              <div className="grid grid-cols-6 gap-2 md:grid-cols-5">
                <div className="col-span-2 md:col-span-2">
                  <FilterProductComponent
                    categoryFilter={categoryFilter} brandFilters={brandFilter}
                    updateCategoryList={handleUpdateCategoryFilter} updateBrandList={handleUpdateBrandFilter}
                    priceFilter={priceFilter} updatePriceList={handlePriceFilter} />
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
