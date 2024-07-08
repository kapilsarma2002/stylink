import { Solid } from '@/components/button'
import { AddToCart } from '@/utils/addToCart'

const CartButton = ({ cartText, product, quantity, size }) => {

  const addToCart = async () => {
    await AddToCart(product, quantity, size)
  }

  return <Solid text={cartText} isWidthFull={true} onClick={addToCart} />
}

export default CartButton
