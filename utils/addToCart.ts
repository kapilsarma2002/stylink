'use server'
import { db } from '@/db/db'
import { cart_products, cart } from '@/db/schema'
import { eq } from 'drizzle-orm'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { getUserFromToken } from '@/utils/authTools'

const COOKIE_NAME = process.env.COOKIE_NAME

export const AddToCart = async (
  product: any,
  quantity: number,
  size: string
) => {
  console.log(`product: ${product}, quantity: ${quantity}, size: ${size}`)

  const token = cookies().get(COOKIE_NAME)
  if (!token) redirect('/signin')

  const user = await getUserFromToken(token)
  console.log('user is : ', user)

  const productInCart = await db
    .select()
    .from(cart_products)
    .where(
      eq(cart_products.product_id, product) && eq(cart_products.size, size)
    )
    .execute()

  if (productInCart.length > 0) {
    // Product already in cart, increase quantity

    const old_quantity = productInCart[0].quantity
    
    await db
      .update(cart_products)
      .set({
        quantity: old_quantity + quantity,
      })
      .where(
        eq(cart_products.product_id, product) && eq(cart_products.size, size)
      )
      .execute()
  } else {
    // Product not in cart, add it
    const cartId = await db
      .insert(cart)
      .values({ user_id: user.id })
      .returning({ cart_id: cart.id })

    await db
      .insert(cart_products)
      .values({
        cart_id: cartId[0].cart_id,
        product_id: product,
        quantity: quantity,
        size: size,
      })
      .execute()
  }
}
