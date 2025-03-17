import { db, habits } from '@/app/db/index';
import { NextResponse } from 'next/server';


export async function GET() {
    try {

        const fetchedHabits = await db.select().from(habits);

        return NextResponse.json(fetchedHabits, { status: 200 });

    } catch (error) {
        return NextResponse.json({ message: `Something went wrong: ${error}` }, { status: 500 });
    }
}
