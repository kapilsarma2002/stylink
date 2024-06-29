/* eslint-disable @next/next/no-img-element */
'use client'
import { useState } from "react"

const ProductImage = ({ product }: any) => {
  const productImages = [product[0].image_url, product[0].image_url_back]
  const [selectedImage, setSelectedImage] = useState(product[0].image_url)


  return (
    <div>
      <div className="h-[calc(100vh-180px)] flex justify-center">
        <img
          src={selectedImage}
          alt={product[0].description}
          width={600}
          height={600}
          className="border my-4 rounded-lg"
        />
      </div>
      <div className="h-[150px] mx-28 flex flex-row rounded-lg">
        {productImages.map((image, index) => (
          <div key={index} className="h-full w-full flex justify-around">
            <img
              src={image}
              alt={product[0].description}
              width={150}
              height={100}
              className={`border rounded-[100%] ${image === selectedImage ? 'border-gray-500' : ''}`}
              onClick={() => setSelectedImage(image)}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProductImage
