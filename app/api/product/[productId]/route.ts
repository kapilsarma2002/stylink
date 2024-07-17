import { getProductFromId } from '@/utils/products'
import { NextResponse } from 'next/server'

export const GET = async (req, { params }) => {
  const productId = params.productId
  const product = await getProductFromId(productId)
  return NextResponse.json({ product })
}
