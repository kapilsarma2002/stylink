'use client'
import { useRecoilValue } from 'recoil'
import { quantityState, sizeState, cartState, productState } from '@/components/state'

const Cart = () => {
  const quantity = useRecoilValue(quantityState)
  const size = useRecoilValue(sizeState)
  const product = useRecoilValue(productState)
  const cart = useRecoilValue(cartState)

  console.log('product : ', product)
  console.log('cart : ', cart)

  return (
    <div>
      <h2>Your Cart</h2>
      <p>Selected Size: {size}</p>
      <p>Selected Quantity: {quantity}</p>
    </div>
  )
}

export default Cart