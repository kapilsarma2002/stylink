import { randomUUID } from 'crypto'
import { sql } from 'drizzle-orm'
import { pgTable, boolean, text, integer } from 'drizzle-orm/pg-core'

const id = () =>
  text('id')
    .primaryKey()
    .$default(() => randomUUID())

const createdAt = () =>
  text('created_at')
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull()

export const users = pgTable('user', {
  id: id(),
  createdAt: createdAt(),
  email: text('email').unique().notNull(),
  password: text('password').notNull(),
  isAdmin: boolean('isAdmin').notNull().default(false),
})

export const products = pgTable('product', {
  id: id(),
  name: text('product').notNull(),
  description: text('description'),
  price: text('price').notNull(),
  image_url: text('image_url'),
})

export const orders = pgTable('order', {
  id: id(),
  createdAt: createdAt(),
  user_id: id().references(() => users.id).notNull(),
  product_id: id().references(() => products.id).notNull(),
  quantity: integer('quantity').notNull(),
  totalPrice: text('totalPrice').notNull(),
})