'use client'
import { useRecoilState } from 'recoil'
import { cartState } from './state'
import { sizeState } from '@/components/state'
import { Solid, WishlistIcon } from '@/components/button'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const cartText = 'Add to Cart'
const outlineText = 'Add to Wishlist'

const CartandWishlist = ({ product }) => {
  const [cart, setCart] = useRecoilState(cartState)
  const selectedSize = useRecoilState(sizeState)

  const addToCart = () => {
    setCart((oldCart) => {
      const productIndex = oldCart.findIndex(
        (item) => item.product.id === product.id && item.size === sizeState
      )

      if (productIndex !== -1) {
        // Product and size already in cart, increase quantity
        const newCart = [...oldCart]
        newCart[productIndex] = {
          ...newCart[productIndex],
          quantity: newCart[productIndex].quantity + 1,
        }

        return newCart
      } else {
        // Product not in cart, add it
        return [...oldCart, { product, size: sizeState, quantity: 1 }]
      }
    })

    toast.success('Added to Cart 🛒')
  }

  return (
    <div className="flex flex-col items-center justify-between gap-4 w-full pr-4">
      <Solid text={cartText} isWidthFull={true} onClick={addToCart} />
      <WishlistIcon text={outlineText} isWidthFull={true} />
      <ToastContainer />
    </div>
  )
}

export default CartandWishlist
