'use client'
import { useRecoilState } from 'recoil'
import { cartState } from './state'
import { Solid, WishlistIcon } from '@/components/button'

const cartText = 'Add to Cart'
const outlineText = 'Add to Wishlist'

const CartandWishlist = ({ product }) => {
  const [cart, setCart] = useRecoilState(cartState)

  const addToCart = () => {
    setCart((oldCart) => [...oldCart, product])
  }

  return (
    <div className="flex flex-col items-center justify-between gap-4 w-full pr-4">
      <Solid text={cartText} isWidthFull={true} onClick={addToCart} />
      <WishlistIcon text={outlineText} isWidthFull={true} />
    </div>
  )
}

export default CartandWishlist
