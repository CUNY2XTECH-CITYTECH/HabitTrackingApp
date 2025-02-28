import {varchar, pgTable, uuid} from "drizzle-orm/pg-core"


export const users = pgTable('users', {
    user_id : uuid().primaryKey().defaultRandom(),
    firstName : varchar({length : 70}).notNull(),
    lastName : varchar({length : 70}).notNull(),
    username : varchar({length : 70}).notNull(),
    email : varchar({length : 70}).notNull().unique()
});


export type User = typeof users.$inferSelect;     //inferSelect helps in using SELECT queries for database. 
export type NewUser = typeof users.$inferInsert;  //helps in inserting data into database & omits primary key or optional columns


export const posts = pgTable('posts', {
    user_id : uuid().primaryKey().defaultRandom(),
});

export const photos = pgTable('photos', {
    user_id : uuid().primaryKey().defaultRandom(),
});