import React from "react";
import data from "../service/data";
import ProductsItem from "../components/Products/ProductsItem";

export default function Home() {
  return (
    <>
      <h2 className="text-2xl py-2">Latest Products</h2>
      <div className="grid grid-cols-4 gap-4 md:grid-cols-3 sm:grid-cols-1 text-secondary">
        {
          data.products.map((product)=>{

            return(
              <ProductsItem key={product.productCode} productDetails={product}/>
            )

          })
        }

      </div>
    </>
    
  )
}
