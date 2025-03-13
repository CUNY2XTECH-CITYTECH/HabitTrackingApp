import { db, habits } from '@app/db/index';
import { eq } from 'drizzle-orm';
import { NextRequest, NextResponse } from 'next/server';
import { verifySession } from 'supertokens-node/recipe/session/framework/express';


async function checkAuth(request: NextRequest) {
    try {
        const session = await verifySession()(request as any, {} as any);
        return session;
    } catch (error) {
        return null;
    }
}

export async function GET(request: NextRequest) {
    try {
        const session = await checkAuth(request);
        if (!session) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }

        const userId = session.getUserId();
        const userHabits = await db.select().from(habits).where(eq(habits.owner_id , userId));

        return NextResponse.json(userHabits, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: 'Something went wrong' }, { status: 500 });
    }
}
