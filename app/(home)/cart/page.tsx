'use client'
import { useRecoilValue } from 'recoil'
import { quantityState, sizeState, cartState, productState } from '@/components/state'
import CartProducts from '@/components/cartProducts'

const Cart = () => {
  const quantity = useRecoilValue(quantityState)
  const size = useRecoilValue(sizeState)
  const product = useRecoilValue(productState)
  const cart = useRecoilValue(cartState)

  return <div><CartProducts /></div>
}

export default Cart