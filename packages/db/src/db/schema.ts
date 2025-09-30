import { pgTable, serial, text } from 'drizzle-orm/pg-core';

export const addresses = pgTable('addresses', {
  id: serial('id').primaryKey(),
  street: text('street').notNull(),
  city: text('city').notNull(),
  state: text('state'),
  zip: text('zip').notNull(),
  country: text('country').notNull(),
});
