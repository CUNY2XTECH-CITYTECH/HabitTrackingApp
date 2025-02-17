import { config } from "dotenv";
import { drizzle } from 'drizzle-orm/node-postgres';
import * as schema from './schema'
import { Pool } from 'pg'
export * from './schema'

//Creating a Pool you can access different database. this is our postgres database 

//Creating a database with the following environment variables
const pool = new Pool({
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE,
    host: process.env.DATABASE_HOST,
    port: parseInt(process.env.DATABASE_PORT!),
    //ssl: false   use this only if you are using fly.io
});

config({ path: ".env" }); // or .env.local

//this creates a database using the pool configuration from line 10 and use the schema as schema from line 3
export const db = drizzle(pool, {
    schema: schema
});

