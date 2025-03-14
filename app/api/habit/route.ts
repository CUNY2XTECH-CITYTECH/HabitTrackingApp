import {db} from '@/app/db/index'
import { eq } from 'drizzle-orm';
import {habits, NewHabits, Habits} from '@/app/db/schema'


//need to handle all the end cases like null or no payload.
export const GET = async(request:Request)=> {
   
    const retrieveUrl = await new URL(request.url);
    
    const habit_id = retrieveUrl.searchParams.get("habit_id");
  
    const habit = await db.select({content: habits.content})
                                    .from(habits)
                                    .where(eq(habits.id, habit_id!));         //posts_id! because next js thinks it could be null

    return Response.json(habit);

}


export const POST = async(request:Request)=>{



}