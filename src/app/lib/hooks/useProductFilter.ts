import {create} from 'zustand'
import {useProductFilterType} from '../../service/types/ProductFilterType'
import { productDetailsType } from '../../service/types/ProductTypes'
import { updateBrandFiltersData, updateCategoryFiltersData, updateInitalProductData } from '../../utils/filterProductUtil'


const initialState: useProductFilterType={
    categoryFilter: [],
    brandFilter: [],
    productsList: [],
    filteredProductsList: [],
}

export const productFilters = create<useProductFilterType>(()=>initialState)


/**
 * Below is custom hook to handle product Filters
 * Functionality to Update category filter, brand filter and product filter
 * @returns Updated product filter details
 */
export default function useProductFilter(){
    const {categoryFilter, brandFilter, productsList, filteredProductsList} = productFilters()

    return{
        categoryFilter, 
        brandFilter,
        productsList,
        filteredProductsList,
        addIntialProductData:(products: productDetailsType[])=>{
            const {categoryFilterData, brandFilterData} = updateInitalProductData(products)
            productFilters.setState({
                categoryFilter: categoryFilterData, 
                brandFilter: brandFilterData,
                productsList: products,
                filteredProductsList: products
            })
        },
        updateCategoryFilters:(categoryCode: string, checkState: boolean)=>{

            const updatedCategoryFilterList = updateCategoryFiltersData(categoryFilter, categoryCode, checkState)

            productFilters.setState({
                categoryFilter: updatedCategoryFilterList, 
                brandFilter,
                productsList,
                filteredProductsList
            })
        },
        updateBrandFilters:(brandCode: string, checkState: boolean)=>{
            const updatedBrandFilterList = updateBrandFiltersData(brandFilter, brandCode, checkState)
            productFilters.setState({
                categoryFilter, 
                brandFilter: updatedBrandFilterList,
                productsList,
                filteredProductsList
            })    
        },
        updateFilteredProductList:(productList: productDetailsType[])=>{
            
            productFilters.setState({
                categoryFilter, 
                brandFilter,
                productsList,
                filteredProductsList: productList
            })    
        }

    }
}