import { GetCartItems } from '@/utils/getCart'
import { useEffect, useState } from 'react'

const CartProducts = () => {
  const [cartProducts, setCartProducts] = useState([])

  useEffect(() => {
    const GetCartOnInit = async () => {
      const products = await GetCartItems()

      const fullProductDetails = await Promise.all(
        products.map(async (product) => {
          const res = await fetch(`/api/product/${product.productId}`)
          const productDetails = await res.json()
          const image = productDetails.product[0].image_url
          console.log('img is : ', image)
          return { ...product, image }
        })
      )
      setCartProducts([...fullProductDetails])
    }

    GetCartOnInit()
  }, [])

  return (
    <div className="flex flex-col items-start pl-16 bg-white overflow-y-auto">
      {cartProducts.map((product, idx) => (
        <div
          className="flex max-w-lg rounded shadow-lg my-2 bg-gray-100"
          key={idx}
        >
          <img className="w-1/2" src={product.image} alt="Product" />
          <div className="px-6 py-4 w-1/2">
            <div className="font-bold text-xl mb-2 text-gray-900">
              Product Name: {product.name}
            </div>
            <p className="text-gray-700 text-base">
              Quantity: {product.quantity}
            </p>
            <p className="text-gray-700 text-base">Size: {product.size}</p>
            <div className="mt-4">
              <button className="bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded-md">
                Remove from cart
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default CartProducts
