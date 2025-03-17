import {varchar, pgTable, uuid} from "drizzle-orm/pg-core"


export const users = pgTable('users', {
    user_id : uuid().primaryKey().defaultRandom(),
    first_name : varchar({length : 70}).notNull(),
    last_name : varchar({length : 70}).notNull(),
    username : varchar({length : 70}).notNull(),
    email : varchar({length : 70}).notNull().unique()
});


export type User = typeof users.$inferSelect;     //inferSelect helps in using SELECT queries for database. 
export type NewUser = typeof users.$inferInsert;  //helps in inserting data into database & omits primary key or optional columns


export const habits = pgTable('habits', {
    id: uuid().primaryKey().defaultRandom(),
    owner_id: uuid().notNull().references(() => users.user_id), // Foreign key referencing users
    content: varchar({ length: 255 }), // Text content for the habit
    image_url: varchar({ length: 255 })
});

export type Habits = typeof habits.$inferSelect;     //inferSelect helps in using SELECT queries for database. 
export type NewHabits = typeof habits.$inferInsert;  //helps in inserting data into database & omits primary key or optional columns

