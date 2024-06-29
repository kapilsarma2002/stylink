import Image from 'next/image'
import { getProductFromId } from '@/utils/products'
import Rating from '@/components/rating'
import AccordionComp from '@/components/accordion'
import QRLinkModal from '@/components/qrlinkmodal'
import { useState } from 'react'
import ProductImage from './productimage'

const ProductInfo = async ({ id }) => {
  const product: any = await getProductFromId(id)


  return (
    <div className="h-full w-full flex flex-row items-center justify-center">
      <div className="h-full w-1/2">
        <ProductImage product={product} />
      </div>
      <div className="w-1/2 h-full py-8 flex flex-col items-start justify-between">
        <div className="text-2xl font-semibold text-black">
          {product[0].name}
        </div>
        <div>
          <Rating />
        </div>
        <div>$ {product[0].price}</div>
        <div>{product[0].description}</div>
        <div className="w-full">
          <AccordionComp />
        </div>
      </div>
    </div>
  )
}

export default ProductInfo
