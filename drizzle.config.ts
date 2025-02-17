import 'dotenv/config';
import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  out: './drizzle',                 //Store migration in drizzle directory
  schema: './app/db/schema.ts',     //schema file in the project
  dialect: 'postgresql',            //language using postgresql
  dbCredentials: {
    //ssl: false,   this if for fly.io if your project is running on it. 
    user: process.env.DATABASE_USER!,
    password: process.env.DATABASE_PASSWORD!,
    database: process.env.DATABASE!,
    host: process.env.DATABASE_HOST!,
    port: parseInt(process.env.DATABASE_PORT!),
  },
  breakpoints: true,
});