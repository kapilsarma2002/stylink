'use client'
import { GetCartItems } from '@/utils/getCart'
import { useEffect, useState } from 'react'
import { Trash2 } from 'lucide-react'
import { Spinner } from '@nextui-org/react'

const CartProducts = () => {
  const [cartProducts, setCartProducts] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const GetCartOnInit = async () => {
      setIsLoading(true)

      const products = await GetCartItems()

      const fullProductDetails = await Promise.all(
        products.map(async (product) => {
          const res = await fetch(`/api/product/${product.productId}`)
          const productDetails = await res.json()
          const image = productDetails.product[0].image_url
          return { ...product, image }
        })
      )
      setCartProducts([...fullProductDetails])
      setIsLoading(false)
    }

    GetCartOnInit()
  }, [])

  const deleteFromCart = async () => {}

  if (isLoading) {
    return (
      <div className='w-full h-full flex items-center justify-center'>
        <Spinner color="default" size='lg'/>
      </div>
    )
  }

  const totalProducts = cartProducts.reduce(
    (total, product) => total + product.quantity,
    0
  )
  const totalPrice = cartProducts.reduce(
    (total, product) => total + product.price * product.quantity,
    0
  )

  return (
    <div className="flex flex-col items-start pl-16 bg-white overflow-y-auto h-[100%]">
      <div className="flex w-[calc(60%)] items-center justify-between">
        <h1 className="my-3 text-2xl font-sarif font-semibold">
          Shopping cart
        </h1>
        <div className="pr-8 text-lg">Price</div>
      </div>
      {cartProducts.map((product, idx) => (
        <div
          className="flex max-w-[calc(60%)] h-[200px] rounded shadow-lg my-2 bg-gray-100"
          key={idx}
        >
          <img className="w-1/5" src={product.image} alt="Product" />
          <div className="px-6 py-4 w-4/5">
            <div className="flex flex-row items-center justify-between">
              <div className="flex flex-col">
                <div className="font-bold text-xl mb-2 text-gray-900">
                  {product.name}
                </div>
                <p className="text-gray-700 text-base">
                  Quantity: {product.quantity}
                </p>
                <p className="text-gray-700 text-base">Size: {product.size}</p>
                <div className="mt-4">
                  <button
                    className="bg-gray-300 p-2 rounded-md hover:bg-gray-200"
                    onClick={deleteFromCart}
                  >
                    <Trash2 />{' '}
                  </button>
                </div>
              </div>
              <div className="text-lg">{product.price * product.quantity}</div>
            </div>
          </div>
        </div>
      ))}
      <div className="flex flex-row-reverse w-[calc(60%)] items-center justify-start py-4 px-2">
        <div>
          Subtotal({totalProducts} items): <span className='font-semibold'>{totalPrice}</span>
        </div>
      </div>
    </div>
  )
}

export default CartProducts
