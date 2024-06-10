import 'server-only'
import { db } from '@/db/db'
import { products } from '@/db/schema'
import { eq } from 'drizzle-orm'

export const getProducts = async () => {
  const allProducts = await db
    .select()
    .from(products)
    .execute()

  return allProducts
}

export const getProductFromId = async (id: string) => {
  const product = await db
    .select()
    .from(products)
    .where(eq(products.id, id))
    .execute()

  return product
}