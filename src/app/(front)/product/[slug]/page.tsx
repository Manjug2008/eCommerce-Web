'use client'
import LoadingAnimation from "@/src/app/components/LoadingAnimation/LoadingAnimation"
import AddToCart from "@/src/app/components/Products/AddToCart"
import { getProductDetailsQuery } from "@/src/app/service/queryServices/productQueryServices"
import { calculateProductShippingCharges, calculateProductTax, calculateProductTotalAmount } from "@/src/app/utils/productUtils"
import Link from "next/link"
import { motion } from "framer-motion";
import Image from "next/image"
import { useEffect } from "react"


interface ProducDetailsProps {
    slug: string
}

const ProducDetails = ({ params, }: { params: ProducDetailsProps }) => {
    const { slug } = params

    const { isFetching, data: product, refetch } =  getProductDetailsQuery(slug)
    useEffect(()=>{ refetch() }, [slug])


    return (
        <>
            {
                isFetching && <LoadingAnimation />
            }
            <div className="my-4 flex justify-start items-center">

                <Link href='/'>
                    <Image
                        src="/images/arrow-back.svg"
                        className="mx-auto"
                        width={30}
                        height={30}
                        alt="arrow back icon"
                    />
                </Link>
            </div>

            {
                product ?
                    (<div className="grid grid-cols-4 gap-3">
                        <div className="col-span-2 md:col-span-4">
                            <motion.img
                                src={product.productImageUrl}
                                alt={product.productTitle}
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.2 }}
                                sizes="100vw"
                                style={{
                                    width: "100%",
                                    height: 'auto'
                                }}
                                className="rounded-md mb-4"
                            />
                        </div>

                        <div className="col-span-1 md:col-span-4">
                            <ul className="space-y-2">
                                <li>
                                    <h1 className="text-xl">Title: {product.productTitle}</h1>
                                </li>
                                <li>Brand: {product.productBrandName} ({product.productCategoryName})</li>
                                <li>Rs.{product.productPrice}/-</li>
                                <li>
                                    <div className="divider bg-gray h-[2px]"></div>
                                </li>
                                <li>
                                    Description: <p>{product.productDescription}</p>
                                </li>

                                <div className="divider bg-gray h-[2px]"></div>

                                <li>
                                    <h1 className="text-xl">About Product</h1>
                                </li>


                            </ul>

                            <ul className="max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">
                                {
                                    product.aboutProduct.map((aboutObj) => {
                                        return (
                                            <li className="text-[12px] ml-2">{aboutObj.aboutProductDescription}</li>
                                        )
                                    })
                                }

                            </ul>




                        </div>

                        <div className="col-span-1 md:col-span-4 md:my-4">
                            <div className="card bg-base-300 shadow-xl text-secondary">
                                <div className="py-4 px-4">
                                    <div className="mb-2 flex justify-between">
                                        <div>Price</div>
                                        <div>Rs. {product.productPrice}</div>
                                    </div>

                                    <div className="divider bg-gray h-[2px]"></div>

                                    <div className="mb-2 flex justify-between">
                                        <div>Tax</div>
                                        <div>Rs. {calculateProductTax(product.productPrice)}</div>
                                    </div>

                                    <div className="mb-2 flex justify-between">
                                        <div>Shipping Charges</div>
                                        <div>Rs. {calculateProductShippingCharges(product.productPrice)}</div>
                                    </div>

                                    <div className="divider bg-gray h-[2px]"></div>

                                    <div className="mb-2 flex justify-between">
                                        <div>Total</div>
                                        <div>Rs. {calculateProductTotalAmount(product.productPrice)}</div>
                                    </div>

                                    <div className="card-actions justify-center">
                                        <AddToCart item={{ ...product, quantity: 0 }} />

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