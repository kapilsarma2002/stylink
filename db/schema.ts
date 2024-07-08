import { user } from '@nextui-org/theme'
import { randomUUID } from 'crypto'
import { sql } from 'drizzle-orm'
import { pgTable, boolean, text, integer, pgEnum, varchar } from 'drizzle-orm/pg-core'

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
  image_url_back: text('image_url_back'),
})

export const orderEnum = pgEnum('order_status', ['placed','error', 'delivered', 'cancelled', 'returned'])

export const orders = pgTable('order', {
  id: id(),
  createdAt: createdAt(),
  user_id: id()
    .references(() => users.id)
    .notNull(),
  product_id: id()
    .references(() => products.id)
    .notNull(),
  quantity: integer('quantity').notNull(),
  totalPrice: text('totalPrice').notNull(),
  status: orderEnum('status').default('placed').notNull(),
})

export const ratings = pgTable('rating', {
  id: id(),
  product_id: id()
    .references(() => products.id)
    .notNull(),
  user_id: id()
    .references(() => users.id)
    .notNull(),
  rating: integer('rating').notNull(),
})

export const cart = pgTable('cart', {
  id: id(),
  user_id: text('user_id')
    .references(() => users.id)
    .notNull(),
})

export const cart_products = pgTable('cart_product', {
  id: id(),
  cart_id: text('cart_id')
    .references(() => cart.id)
    .notNull(),
  product_id: text('product_id')
    .references(() => products.id)
    .notNull(),
  quantity: integer('quantity').notNull(),
  size: varchar('size').notNull(),
})