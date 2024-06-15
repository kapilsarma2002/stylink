import ProductImage from '@/components/productinfo'

const Product = ({ params }) => {
  const id = params.id

  return (
    <div className="flex flex-row w-full h-full overflow-y-auto">
        <ProductImage id={id} />
    </div>
  )
}

export default Product
