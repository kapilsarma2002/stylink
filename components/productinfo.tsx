import Image from 'next/image'
import { getProductFromId } from '@/utils/products'
import QRLinkModal from '@/components/qrlinkmodal'

const ProductInfo = async ({ id }) => {
  const product: any = await getProductFromId(id)

  return (
    <div className="h-full w-full border border-black">
      <div className="h-[60px] p-4 text-3xl">{product[0].description}</div>
      <div className="h-[calc(100vh-160px)] flex flex-row justify-center overflow-y-auto">
        <Image
          src={product[0].image_url}
          alt={product[0].description}
          width={600}
          height={500}
        />
        <Image
          src={product[0].image_url_back}
          alt={product[0].description}
          width={600}
          height={500}
        />
      </div>
      <QRLinkModal />
    </div>
  )
}

export default ProductInfo
