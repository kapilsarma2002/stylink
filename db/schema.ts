import { randomUUID } from 'crypto'
import { sql } from 'drizzle-orm'
import { pgTable, serial, text, varchar, integer, PgColumn, PgTableWithColumns } from 'drizzle-orm/pg-core'

const id = () =>
  text('id')
    .primaryKey()
    .$default(() => randomUUID())

const createdAt = () =>
  text('created_at')
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull()

export const user = pgTable('user', {
  id: id(),
  createdAt: createdAt(),
  email: text('email').unique().notNull(),
  password: text('password').notNull(),
})

export const product = pgTable('product', {
  id: id(),
  name: text('product').notNull(),
  description: text('description'),
  price: text('price').notNull(),
  image_url: text('image_url'),
})

export const order = pgTable('order', {
  id: id(),
  createdAt: createdAt(),
  user_id: id().references(() => user.id).notNull(),
  product_id: id().references(() => product.id).notNull(),
  quantity: integer('quantity').notNull(),
  totalPrice: text('totalPrice').notNull(),
})