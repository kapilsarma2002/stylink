'use server'
import { db } from '@/db/db'
import { cart_products, cart } from '@/db/schema'
import { eq } from 'drizzle-orm'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { getUserFromToken } from '@/utils/authTools'

const COOKIE_NAME = process.env.COOKIE_NAME

export const GetCartItems = async () => {
  const token = cookies().get(COOKIE_NAME)
  if (!token) redirect('/signin')

  const user = await getUserFromToken(token)
  console.log('user is : ', user)

  const cartItems = await db
    .select({
      productId: cart_products.product_id,
      quantity: cart_products.quantity,
      size: cart_products.size,
    })
    .from(cart_products)
    .innerJoin(cart, eq(cart_products.cart_id, cart.id))
    .where(eq(cart.user_id, user.id))
    .execute()

  console.log('cartItems : ', cartItems)

  return cartItems
}
