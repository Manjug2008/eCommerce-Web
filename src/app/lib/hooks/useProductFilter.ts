import { create } from 'zustand'
import { useProductFilterType } from '../../service/types/ProductFilterType'
import { productDetailsType } from '../../service/types/ProductTypes'
import {
    updateBrandFiltersData, updateCategoryFiltersData, updateInitalProductData,
    getProductBrandListData, updatePriceFiltersStateData, updateProductFilters
} from '../../utils/filterProductUtil'
import { priceFilterData } from '../../utils/priceFilterData'


const initialState: useProductFilterType = {
    categoryFilter: [],
    brandFilter: [],
    productsList: [],
    filteredProductsList: [],
    priceFilter: priceFilterData
}

export const productFilters = create<useProductFilterType>(() => initialState)


/**
 * Below is custom hook to handle product Filters
 * Functionality to Update category filter, brand filter and product filter
 * @returns Updated product filter details
 */
export default function useProductFilter() {
    const { categoryFilter, brandFilter, productsList, filteredProductsList, priceFilter } = productFilters()

    return {
        categoryFilter,
        brandFilter,
        productsList,
        filteredProductsList,
        priceFilter,
        addIntialProductData: (products: productDetailsType[]) => {
            const { categoryFilterData, brandFilterData } = updateInitalProductData(products)
            productFilters.setState({
                categoryFilter: categoryFilterData,
                brandFilter: brandFilterData,
                productsList: products,
                filteredProductsList: products,
                priceFilter
            })
        },
        updateCategoryFilters: (categoryCode: string, checkState: boolean) => {

            const updatedCategoryFilterList = updateCategoryFiltersData(categoryFilter, categoryCode, checkState)

            productFilters.setState({
                categoryFilter: updatedCategoryFilterList,
                brandFilter,
                productsList,
                filteredProductsList,
                priceFilter
            })
        },
        updateBrandFilters: (brandCode: string, checkState: boolean) => {
            const updatedBrandFilterList = updateBrandFiltersData(brandFilter, brandCode, checkState)
            productFilters.setState({
                categoryFilter,
                brandFilter: updatedBrandFilterList,
                productsList,
                filteredProductsList,
                priceFilter
            })
        },
        updateFilteredProductList: (productList: productDetailsType[]) => {
            const productBrandListResult = getProductBrandListData(productList)
            productFilters.setState({
                categoryFilter,
                brandFilter: productBrandListResult,
                productsList,
                filteredProductsList: productList,
                priceFilter
            })
        },
        updatePriceFilters: (priceUnique: number, checkState: boolean) => {
            const priceSelectDataResult = updatePriceFiltersStateData(priceFilter, priceUnique, checkState)
            productFilters.setState({
                categoryFilter,
                brandFilter,
                productsList,
                filteredProductsList,
                priceFilter: priceSelectDataResult
            })
        },
        filterProductData: (priceUnique: number, brandCode?: string, categoryCode?: string) => {
            const productSelectDataResult = updateProductFilters(productsList, priceFilter, priceUnique, brandCode, categoryCode)
            productFilters.setState({
                categoryFilter,
                brandFilter,
                productsList,
                filteredProductsList: productSelectDataResult,
                priceFilter
            })
        }

    }
}