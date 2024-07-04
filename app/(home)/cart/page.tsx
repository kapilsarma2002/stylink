'use client'
import { useRecoilValue } from 'recoil'
import { quantityState, sizeState, cartState } from '@/components/state'

const Cart = () => {
  const quantity = useRecoilValue(quantityState)
  const size = useRecoilValue(sizeState)
  const cart = useRecoilValue(cartState)

  console.log(cart)

  return (
    <div>
      <h2>Your Cart</h2>
      <p>Selected Size: {size}</p>
      <p>Selected Quantity: {quantity}</p>
    </div>
  )
}

export default Cart