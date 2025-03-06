import {db} from '@/app/db/index'
import { eq } from 'drizzle-orm';
import {posts, NewPosts, Posts} from '@/app/db/schema'
import { NextResponse } from 'next/server';

//need to handle all the end cases like null or no payload.
export const GET = async(request:Request)=> {

    const retrieveUrl = await new URL(request.url);
    
    const posts_id = retrieveUrl.searchParams.get("posts_id");
  
    const habit = await db.select({posts_details: posts.posts_details})
                                    .from(posts)
                                    .where(eq(posts.posts_id, posts_id!))           //posts_id! becuase next js thinks it could be null

    return Response.json(habit); 
}