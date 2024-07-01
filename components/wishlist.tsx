import { Solid, WishlistIcon } from '@/components/button'

const cartText = "Add to Cart"
const outlineText = "Add to Wishlist"

const CartandWishlist = () => {
  return (
    <div className="flex flex-col items-center justify-between gap-4 w-full pr-4">
      <Solid text={cartText} isWidthFull={true} />
      <WishlistIcon text={outlineText} isWidthFull={true} />
    </div>
  )
}

export default CartandWishlist