'use client'
import LoadingAnimation from "@/src/app/components/LoadingAnimation/LoadingAnimation"
import AddToCart from "@/src/app/components/Products/AddToCart"
import { getProductDetailsQuery } from "@/src/app/service/queryServices/productQueryServices"
import Link from "next/link"

interface ProducDetailsProps {
    slug: string
  }

const ProducDetails = ({params,}:{params: ProducDetailsProps}) => {
    const {slug} = params

    const {isFetching, data: product} = getProductDetailsQuery(slug)

  return (
    <>
    {
        isFetching &&  <LoadingAnimation />
    }
    <div className="my-2">
        <Link href='/'> back to products</Link>
    </div>

    {
        product ?
        (<div className="grid grid-cols-4 gap-3">
        <div className="col-span-2 md:col-span-4">
            <img
            src={product.productImageUrl}
            alt={product.productTitle}
            width={640}
            height={640}
            sizes="100vw"
            style={{
                width:"100%",
                height:'auto'
            }}
            />
        </div>

        <div className="col-span-1 md:col-span-4">
            <ul className="space-y-2">
                <li>
                    <h1 className="text-xl">{product.productTitle}</h1>
                </li>
                <li>{product.productBrandName}</li>
                <li>{product.productCategoryName} </li>
                <li>{product.productPrice}</li>
                <li>
                 <div className="divider bg-gray h-[2px]"></div>
                </li>
                <li>
                    Description: <p>{product.productDescription}</p>
                </li>
            </ul>
        </div>

        <div className="col-span-1 md:col-span-4 md:my-4">
            <div className="card bg-base-300 shadow-xl text-secondary">
                <div className="card-body">
                    <div className="mb-2 flex justify-between">
                        <div>Price</div>
                        <div>Rs. {product.productPrice}</div>
                    </div>

                    <div className="card-actions justify-center">
                    <AddToCart item={{...product, quantity: 0}}/>

                    </div>
                </div>
            </div>
        </div>

    </div>)
    : null

    }
    
    </>
  )
}

export default ProducDetails