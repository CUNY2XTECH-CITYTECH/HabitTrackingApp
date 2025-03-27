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
        id: uuid().primaryKey().defaultRandom(),
        owner_id: uuid().notNull().references(() => users.user_id), // Foreign key referencing users
        content: varchar({ length: 255 }), // Text content for the habit
        image_url: varchar({ length: 255 })
    });

    export type Habits = typeof habits.$inferInsert;
    export type NewHabit = typeof habits.$inferInsert;

    export const likes = pgTable('likes', {
        id: uuid().primaryKey().defaultRandom(),
        owner_id: uuid().notNull().references(() => users.user_id),
        habit_id: uuid().notNull().references(() => habits.id)
    });

    export type Like = typeof likes.$inferInsert;
    export type NewLike = typeof  likes.$inferInsert;