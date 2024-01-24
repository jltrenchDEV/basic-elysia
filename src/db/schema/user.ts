import { int, mysqlTable, varchar } from 'drizzle-orm/mysql-core';
import { createInsertSchema, createSelectSchema } from 'drizzle-typebox';

// * Users Table
export const users = mysqlTable('users', {
  id: int('id'),
  username: varchar('username', { length: 255 }),
});

export type User = typeof users.$inferSelect;
export type InsertUsers = typeof users.$inferInsert;

export const selectUserSchema = createSelectSchema(users);
export const insertUserSchema = createInsertSchema(users);
