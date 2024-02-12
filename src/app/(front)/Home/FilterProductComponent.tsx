'use client'
import React from 'react'
import { brandFilterType, categoryFilterType } from '../../service/types/ProductFilterType'

interface FilterProductComponentProps {
  brandFilters: brandFilterType[],
  categoryFilter: categoryFilterType[],
  updateCategoryList: (categoryCode: string, checkState: boolean)=> void,
  updateBrandList: (brandCode: string, checkState: boolean)=> void,

}

const FilterProductComponent = (props: FilterProductComponentProps) => {
  const { brandFilters, categoryFilter, updateCategoryList, updateBrandList } = props

  return (
    <div className='flex flex-col gap-2'>

      <div>
        <h3 className="mb-2 font-semibold text-gray-900 ">Categories</h3>
        <ul className="w-48 md:w-32 text-sm font-bold bg-cardBg border border-secondary border-solid rounded-lg shadow-md">
          {
            categoryFilter.map((category, index) => {
              return (
                <li key={index} className={`w-full ${categoryFilter.length === (index+1) ? "border-b" : ""}border-b border-secondary rounded-t-lg`}>
                  <div key={index}  className="flex items-center space-x-2 ps-3 py-2">
                      <input  
                      id={category.categoryCode}
                      type = 'checkbox' 
                      value={category.categoryCode}
                      checked={category.isSelected}
                      onChange={(e)=>{updateCategoryList(category.categoryCode, e.target.checked)}}
                      className='w-4 h-4 rounded-md cursor-pointer border-navyBlue'/>
                      <p className='text-sm font-medium'> {category.categoryName}</p>
                  </div>
                </li>

              )
            })
          }
        </ul>
      </div>

      <div className='divider bg-secondary h-[2px]'/>

      <div>
        <h3 className="mb-2 font-semibold text-gray-900 ">Brand</h3>
        <ul className="w-48 md:w-32 text-sm font-bold bg-cardBg border border-secondary border-solid rounded-lg shadow-md">
          {
            brandFilters.map((brand, index) => {
              return (
                <li key={index} className={`w-full ${brandFilters.length === (index+1) ? "border-b" : ""}border-b border-secondary rounded-t-lg`}>
                  <div key={index}  className="flex items-center space-x-2 ps-3 py-2">
                      <input  
                      id={brand.brandCode}
                      type = 'checkbox' 
                      value={brand.brandCode}
                      checked={brand.isSelected}
                      onChange={(e)=>{updateBrandList(brand.brandCode, e.target.checked)}}
                      className='w-4 h-4 rounded-md cursor-pointer border-navyBlue'/>
                      <p className='text-sm font-medium'> {brand.brandName}</p>
                  </div>
                </li>

              )
            })
          }
        </ul>
      </div>





    </div>
  )
}

export default FilterProductComponent