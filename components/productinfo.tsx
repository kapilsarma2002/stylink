import Image from 'next/image'
import { getProductFromId } from '@/utils/products'
import QRLinkModal from '@/components/qrlinkmodal'

const ProductInfo = async ({ id }) => {
  const product: any = await getProductFromId(id)

  return (
    <div className="h-full w-full flex flex-row items-center justify-center">
      <div className="h-full w-1/2 border border-black">
        <div className="h-[calc(100vh-180px)] flex justify-center">
          <Image
            src={product[0].image_url}
            alt={product[0].description}
            width={600}
            height={600}
            className="border border-black my-4 rounded-lg"
          />
        </div>
        {/* <QRLinkModal /> */}
        <div className="border border-black h-[150px] mx-28 flex flex-row"></div>
      </div>
      <div className="w-1/2 h-full border border-black">something</div>
    </div>
  )
}

export default ProductInfo
