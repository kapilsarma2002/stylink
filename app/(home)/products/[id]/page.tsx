import { getProductFromId } from '@/utils/products'
import Image from 'next/image'

const Product = async ({ params }) => {
  const id = params.id
  const product: any = await getProductFromId(id)

  return (
    <div className="flex flex-row w-full h-full overflow-y-auto">
      <div className="h-full w-4/5 flex flex-col items-center justify-center">
        <div className="h-[60px] p-4 text-3xl font-semibold">
          {product[0].description}
        </div>
        <div className="h-[calc(100vh-60px)] flex flex-row overflow-y-auto">
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
      </div>
      <div className="w-1/5 border border-black">something</div>
    </div>
  )
}

export default Product
