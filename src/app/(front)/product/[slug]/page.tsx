import data from "@/src/app/service/data"
import Image from "next/image"
import Link from "next/link"

interface ProducDetailsProps {
    slug: string
  }

const ProducDetails = ({params,}:{params: ProducDetailsProps}) => {

    const product = data.products.find((productDetails)=> productDetails.productCode === params.slug)

    if(!product){
        return <div>Product not found</div>
    }

  return (
    <>
    <div className="my-2">
        <Link href='/'> back to products</Link>
    </div>

    <div className="grid grid-cols-4 gap-3">
        <div className="col-span-2 md:col-span-4">
            <Image
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

        <div className="col-span-1 md:col-span-4 md:mb-4">
            <div className="card bg-base-300 shadow-xl text-secondary">
                <div className="card-body">
                    <div className="mb-2 flex justify-between">
                        <div>Price</div>
                        <div>Rs. {product.productPrice}</div>
                    </div>
                </div>
            </div>
        </div>

    </div>
    </>
  )
}

export default ProducDetails