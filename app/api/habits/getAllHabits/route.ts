import { db, habits } from '@/app/db/index';
import { NextResponse } from 'next/server';


export async function GET() {
    try {

        const userHabits = await db.select().from(habits);

        return NextResponse.json(userHabits, { status: 200 });
        
    } catch (error) {
        return NextResponse.json({ error: 'Something went wrong' }, { status: 500 });
    }
}
