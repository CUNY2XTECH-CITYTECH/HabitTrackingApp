import {db, NewUser, users} from '@/app/db/index';



const createUser = async (user: NewUser ) =>{
    const newUser = await db.insert(users).values(user).returning();

    return newUser; 
}

//Need to configure some kind of authentication. 
// email is unique, and handled by the database itself, but i need to give a resonse to the client.
export const POST = async(request:Request)=> {

    const userInfo = await request.json();
    const newUser = await createUser(userInfo);
    return Response.json(newUser); 
}

