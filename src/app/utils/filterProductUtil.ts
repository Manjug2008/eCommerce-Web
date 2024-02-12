import { brandFilterType, categoryFilterType } from "../service/types/ProductFilterType"
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
 * The function responsible to filter products data based on branch code and category code
 * @param brandCode 
 * @param productList 
 * @param categoryCode 
 * @returns Filtered list of product details
 */
export const filterProductsBasedOnBrandAndCategory = (productList: productDetailsType[], brandCode?: string, categoryCode?: string) => {

    const productListResult: productDetailsType[] = []

    if (!brandCode && !categoryCode) {
        return productList
    }


    productList.map((product) => {
        categoryCode && brandCode
            ? (product.productCategoryCode === categoryCode && product.productBrandCode === brandCode) && productListResult.push(product)
            : categoryCode && !brandCode
                ? product.productCategoryCode === categoryCode && productListResult.push(product)
                : !categoryCode && brandCode
                    ? product.productBrandCode === brandCode && productListResult.push(product)
                    : productListResult.push(product)
    })
    return productListResult

}