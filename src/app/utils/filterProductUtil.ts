import { brandFilterType, categoryFilterType } from "../service/types/ProductFilterType"
import { productDetailsType } from "../service/types/ProductTypes"

/**
 * The function to calculate product tax
 * @param productPrice 
 * @returns product tax price
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