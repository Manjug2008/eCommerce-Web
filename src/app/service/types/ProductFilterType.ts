import { productDetailsType } from "./ProductTypes"

/**
 * The model to handle category filter
 */
export type categoryFilterType = {
    categoryCode: string,
    categoryName: string,
    isSelected: boolean
    }

/**
 * The model to handle brand filter
 */
export type brandFilterType = {
    brandCode: string,
    brandName: string,
    isSelected: boolean
    }

/**
 * The model to handle price filters
 */
   export type priceFilterType = {
       priceUnique: number,
       priceStart: number,
       priceEnd: number,
       priceTitle: string,
       isSelected: boolean
       }

/**
 * The model to useProduct filter
 */
export type useProductFilterType = {
    categoryFilter: categoryFilterType[],
    brandFilter: brandFilterType[],
    productsList: productDetailsType[],
    filteredProductsList: productDetailsType[],
    priceFilter: priceFilterType[]
    }

