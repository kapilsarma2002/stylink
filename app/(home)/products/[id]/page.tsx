import ProductInfo from '@/components/productinfo'

const Product = ({ params }) => {
  const id = params.id

  return (
    <div className="flex flex-row w-full h-full overflow-y-auto">
      <div className="h-full w-4/5 flex flex-col items-center justify-center">
        <ProductInfo id={id} />
      </div>
      <div className="w-1/5">something</div>
    </div>
  )
}

export default Product
