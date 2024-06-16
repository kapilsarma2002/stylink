import Image from 'next/image'
import { getProductFromId } from '@/utils/products'
import Rating from '@/components/rating'
import AccordionComp from '@/components/accordion'
import QRLinkModal from '@/components/qrlinkmodal'

const ProductInfo = async ({ id }) => {
  const product: any = await getProductFromId(id)

  const productImages = [product[0].image_url, product[0].image_url_back]

  return (
    <div className="h-full w-full flex flex-row items-center justify-center">
      <div className="h-full w-1/2">
        <div className="h-[calc(100vh-180px)] flex justify-center">
          <Image
            src={product[0].image_url}
            alt={product[0].description}
            width={600}
            height={600}
            className="border my-4 rounded-lg"
          />
        </div>
        {/* <QRLinkModal /> */}
        <div className="h-[150px] mx-28 flex flex-row rounded-lg">
          {productImages.map((image, index) => (
            <div key={index} className="h-full w-full flex justify-around">
              <Image
                src={image}
                alt={product[0].description}
                width={150}
                height={100}
                className="border rounded-[100%]"
              />
            </div>
          ))}
        </div>
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
        <div className='w-full'><AccordionComp/></div>
      </div>
    </div>
  )
}

export default ProductInfo
