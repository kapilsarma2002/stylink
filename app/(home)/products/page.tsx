import { getProducts } from '@/utils/products'
import Image from 'next/image'
import { BentoGrid, BentoGridItem } from '@/components/grid'

const products = async () => {
  const allProducts = await getProducts()

  return (
    <div className="h-[calc(100vh-40px)] w-full overflow-y-auto">
      <BentoGrid className="h-full max-w-6xl mx-auto gap-x-4 gap-y-32 max-col-span-2">
        {allProducts.map((product: any, i: number) => {
          return (
            <BentoGridItem
              key={product.id}
              title={product.title}
              description={product.description}
              header={product.title}
              icon={
                <Image
                  src={product.image_url}
                  alt={product.title}
                  width={250}
                  height={250}
                />
              }
              className='shadow-bento dark:shadow-none dark:bg-black dark:border-white/[0.2] bg-white border border-transparent rounded-xl p-4 justify-between flex flex-col space-y-4 group/bento hover:shadow-xl transition duration-200'
            />
          )
        })}
      </BentoGrid>
    </div>
  )
}

export default products
