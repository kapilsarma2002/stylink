'use client'
import { useRecoilState } from 'recoil'
import { sizeState, cartState, quantityState, productState } from '@/components/state'
import { WishlistIcon } from '@/components/button'
import { ToastContainer, toast } from 'react-toastify'
import CartButton from '@/components/cartbutton'
import 'react-toastify/dist/ReactToastify.css'

const cartText = 'Add to Cart'
const outlineText = 'Add to Wishlist'

const CartandWishlist = ({ product }) => {
  const [cart, setCart] = useRecoilState(cartState)
  const selectedProduct = useRecoilState(productState)
  const selectedSize = useRecoilState(sizeState)
  const selectedQuantity = useRecoilState(quantityState)

  const addToCart = () => {
    setCart((oldCart) => {
      const productIndex = oldCart.findIndex(
        (item) => item.product.id === product.id && item.size === selectedSize
      )

      if (productIndex !== -1) {
        // Product and size already in cart, increase quantity
        const newCart = [...oldCart]
        newCart[productIndex] = {
          ...newCart[productIndex],
          quantity: newCart[productIndex].quantity + selectedQuantity,
        }

        return newCart
      } else {
        // Product not in cart, add it
        return [
          ...oldCart,
          {
            product: product.id,
            size: selectedSize,
            quantity: selectedQuantity,
          },
        ]
      }
    })

    toast.success('Added to Cart 🛒')
  }

  return (
    <div className="flex flex-col items-center justify-between gap-4 w-full pr-4">
      {/* <Solid text={cartText} isWidthFull={true} onClick={addToCart} /> */}
      <CartButton cartText={cartText} product={product.id} quantity={selectedQuantity[0]} size={selectedSize[0]} />
      <WishlistIcon text={outlineText} isWidthFull={true} />
      <ToastContainer />
    </div>
  )
}

export default CartandWishlist
