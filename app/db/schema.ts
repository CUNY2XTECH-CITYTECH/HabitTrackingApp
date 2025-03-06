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


export const habits = pgTable('habits', {
    hab_id: uuid().primaryKey().defaultRandom(),
    owner: uuid().notNull().references(() => users.user_id), // Foreign key referencing users
    content: varchar({ length: 255 }), // Text content for the habit
    image: varchar({ length: 255 })
});