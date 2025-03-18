import { db, NewHabit, habits } from '../db/index';


async function createHabit(habit: NewHabit) {
    const newHabit = await db.insert(habits).values(habit).returning();

    return newHabit;
}

export const POST = async (request: Request) => {
  try {
    const habitData = await request.json();

    if (!habitData || !habitData.name) {
      return new Response(JSON.stringify({ error: 'Invalid data' }), {
        status: 400,
      });
    }

    const newHabit = await createHabit(habitData);

    return new Response(JSON.stringify(newHabit), { status: 201 });
  } catch (error) {
    console.error('Error creating habit:', error);
    return new Response(JSON.stringify({ error: 'Failed to create habit' }), {
      status: 500,
    });
  }
};
