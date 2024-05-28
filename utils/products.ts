import 'server-only'
import { db } from '@/db/db'
import { products } from '@/db/schema'

export const getProducts = async () => {
  const allProducts = await db
    .select()
    .from(products)
    .execute()

  return allProducts
}