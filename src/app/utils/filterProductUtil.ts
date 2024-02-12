import { brandFilterType, categoryFilterType, priceFilterType } from "../service/types/ProductFilterType"
import { productDetailsType } from "../service/types/ProductTypes"

/**
 * The function is responsible to fetch product brand details from product list
 * @param productList 
 * @returns Product brand list
 */
export const getProductBrandListData = (productList: productDetailsType[]) => {
    const brandFilterData: brandFilterType[] = []

    productList.map((product) => {
        const { productBrandCode, productBrandName } = product

        const isBrandExist = brandFilterData.find(brand => brand.brandCode === productBrandCode)
        !isBrandExist && brandFilterData.push({ brandCode: productBrandCode, brandName: productBrandName, isSelected: false })
    })

    return (brandFilterData)
}

/**
 * The function to update intial product data
 * @param productList 
 * @returns updated category filters and brand filters
 */
export const updateInitalProductData = (productList: productDetailsType[]) => {

    const categoryFilterData: categoryFilterType[] = []
    const brandFilterData: brandFilterType[] = getProductBrandListData(productList)

    productList.map((product) => {
        const { productCategoryCode, productCategoryName } = product

        const isCategoryExist = categoryFilterData.find(category => category.categoryCode === productCategoryCode)
        !isCategoryExist && categoryFilterData.push({ categoryCode: productCategoryCode, categoryName: productCategoryName, isSelected: false })

    })


    return ({ categoryFilterData, brandFilterData })
}


/**
 * The function responsible to update category selected status
 * @param categoryFilter 
 * @param categoryCode 
 * @param checkState 
 * @returns updated category filter list
 */
export const updateCategoryFiltersData = (categoryFilter: categoryFilterType[], categoryCode: string, checkState: boolean) => {

    return categoryFilter.map((category) => {
        if (category.categoryCode === categoryCode) {
            return { ...category, isSelected: checkState }
        }
        return { ...category, isSelected: false }
    })

}

/**
 * The function responsible to update brand selected status
 * @param brandFilter 
 * @param brandCode 
 * @param checkState 
 * @returns updated brand filter list
 */
export const updateBrandFiltersData = (brandFilter: brandFilterType[], brandCode: string, checkState: boolean) => {

    return brandFilter.map((brand) => {
        if (brand.brandCode === brandCode) {
            return { ...brand, isSelected: checkState }
        }
        return { ...brand, isSelected: false }
    })

}

/**
 * The function responsible to update select state of price
 * @param priceFilterData 
 * @param priceUnique 
 * @param checkState 
 * @returns List of price data
 */
export const updatePriceFiltersStateData = (priceFilterData: priceFilterType[], priceUnique: number, checkState: boolean) => {

    return priceFilterData.map((priceObj) => {
        if (priceObj.priceUnique === priceUnique) {
            return { ...priceObj, isSelected: checkState }
        }
        return { ...priceObj, isSelected: false }
    })

}

/**
 * The Function to filter Data based on price, brand and category
 * @param productList 
 * @param priceList 
 * @param priceUnique 
 * @param brandCode 
 * @param categoryCode 
 * @returns 
 */
export const updateProductFilters = (productList: productDetailsType[], priceList:priceFilterType[],  priceUnique: number, brandCode?: string, categoryCode?: string) => {

    let productListResult: productDetailsType[] = []

    if (!brandCode && !categoryCode && priceUnique == 0) {
        return productList
    }
    
    const priceData = priceList.find((priceObj) => priceObj.priceUnique === priceUnique)

    productList.map((product) => {
        categoryCode && brandCode
            ? (product.productCategoryCode === categoryCode && product.productBrandCode === brandCode ) && productListResult.push(product)
            : categoryCode && !brandCode
                ? product.productCategoryCode === categoryCode && productListResult.push(product)
                : !categoryCode && brandCode
                    ? product.productBrandCode === brandCode && productListResult.push(product)
                    : productListResult.push(product)
    })

    if(priceData){
        const isLastPriceElement = priceData.priceEnd === 0 ? true : false
        productListResult = filterDataBasedOnprice(priceData, productListResult, isLastPriceElement)

    }
    
    return productListResult
}

/**
 * The function responsible to filter product data between price range
 * @param priceData 
 * @param productList 
 * @param isLastPriceElement 
 * @returns product Details data list
 */
export const filterDataBasedOnprice = (priceData: priceFilterType, productList: productDetailsType[], isLastPriceElement: boolean) => {

    const productResult: productDetailsType[] = []

    productList.map((product) => {
        isLastPriceElement
         ? (product.productPrice >= priceData.priceStart) && productResult.push(product)
         : (product.productPrice >= priceData.priceStart && product.productPrice <= priceData.priceEnd) && productResult.push(product)
        
    })

    return productResult
}