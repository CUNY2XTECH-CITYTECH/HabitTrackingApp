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
    posts_id : uuid().primaryKey().defaultRandom(),
    posts_details: varchar({length:255})
});

export type Posts = typeof posts.$inferSelect;     //inferSelect helps in using SELECT queries for database. 
export type NewPosts = typeof posts.$inferInsert;  //helps in inserting data into database & omits primary key or optional columns


export const photos = pgTable('photos', {
    user_id : uuid().primaryKey().defaultRandom(),
});

export type Photos = typeof photos.$inferSelect;     //inferSelect helps in using SELECT queries for database. 
export type NewPhotos = typeof photos.$inferInsert;  //helps in inserting data into database & omits primary key or optional columns
