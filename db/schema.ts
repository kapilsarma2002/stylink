import { randomUUID } from 'crypto'
import { relations, sql, OneOrMany } from 'drizzle-orm'
import { pgTable, serial, text, varchar, integer, PgColumn, PgTableWithColumns } from 'drizzle-orm/pg-core'

const id = () =>
  text('id')
    .primaryKey()
    .$default(() => randomUUID())

const createdAt = () =>
  text('created_at')
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull()

const date = (name: string) => text(name)

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