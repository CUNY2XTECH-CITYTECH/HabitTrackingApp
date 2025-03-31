import {db} from '@/app/db/index'
import { eq } from 'drizzle-orm';
import {likes} from '@/app/db/schema'
import { NextResponse } from 'next/server';

export const GET = async()=>{
    try {
    
            const fetchedlikes = await db.select().from(likes);
    
            return NextResponse.json(fetchedlikes, { status: 200 });
    
        } catch (error) {
            return NextResponse.json({ message: `Something went wrong: ${error}` }, { status: 500 });
        }
}