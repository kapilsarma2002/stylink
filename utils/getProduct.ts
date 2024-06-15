import { getProductFromId } from "./products"
import Image from "next/image"

const Product = ({ params }: any) => {
  const id = params.id
  const product = getProductFromId(id)
  const res = []
  return (
    <Image
      src={product[0].image_url}
      alt={product[0].description}
      width={600}
      height={500}
    />
  )
}

export default Product
