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
      {cart.map((item, idx) => (
          <div key={idx}>
            <div>{item.id}</div>
            <div>{item.size}</div>
            <div>{item.quantity}</div>
          </div>
      ))}
    </div>
  )
}

export default Cart