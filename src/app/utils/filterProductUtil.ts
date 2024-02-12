import { brandFilterType, categoryFilterType } from "../service/types/ProductFilterType"
import { productDetailsType } from "../service/types/ProductTypes"

/**
 * The function to update intial product data
 * @param productList 
 * @returns updated category filters and brand filters
 */
export const updateInitalProductData = (productList: productDetailsType[])=>{
    
    const categoryFilterData: categoryFilterType[] = []
    const brandFilterData: brandFilterType[] = []

    productList.map((product)=>{
        const {productBrandCode, productBrandName, productCategoryCode, productCategoryName} = product

        const isCategoryExist = categoryFilterData.find(category => category.categoryCode === productCategoryCode)
        !isCategoryExist && categoryFilterData.push({categoryCode: productCategoryCode, categoryName: productCategoryName,isSelected: false})

        const isBrandExist = brandFilterData.find(brand => brand.brandCode === productBrandCode)
        !isBrandExist && brandFilterData.push({brandCode: productBrandCode, brandName: productBrandName, isSelected: false})

        })

        return ({categoryFilterData, brandFilterData})
}


/**
 * The function responsible to update category selected status
 * @param categoryFilter 
 * @param categoryCode 
 * @param checkState 
 * @returns updated category filter list
 */
export const updateCategoryFiltersData = (categoryFilter: categoryFilterType[], categoryCode: string, checkState: boolean)=>{

    return categoryFilter.map((category)=>{
        if(category.categoryCode === categoryCode){
            return {...category, isSelected: checkState}
        }
        return {...category, isSelected: false}
    })
        
}

/**
 * The function responsible to update brand selected status
 * @param brandFilter 
 * @param brandCode 
 * @param checkState 
 * @returns updated brand filter list
 */
export const updateBrandFiltersData = (brandFilter: brandFilterType[], brandCode: string, checkState: boolean)=>{

    return brandFilter.map((brand)=>{
        if(brand.brandCode === brandCode){
            return {...brand, isSelected: checkState}
        }
        return {...brand, isSelected: false}
    })
        
}