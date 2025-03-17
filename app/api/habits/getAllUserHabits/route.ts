import { db, habits } from '@/app/db/index';
import { eq } from 'drizzle-orm';
import { NextRequest, NextResponse } from 'next/server';


export async function GET(request: NextRequest) {
    try {

        const retrieveUrl = await new URL(request.url);

        const userId = retrieveUrl.searchParams.get("user_id");
        
        const userHabits = await db.select({content: habits.content}).from(habits).where(eq(habits.owner_id , userId!));

        return NextResponse.json(userHabits, { status: 200 });

    } catch (error) {
        return NextResponse.json({ message: `Something went wrong: ${error}` }, { status: 500 });
    }
}
