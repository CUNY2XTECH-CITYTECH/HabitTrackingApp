
// app/protected/page.tsx
import { redirect } from 'next/navigation';
import Session from 'supertokens-web-js/recipe/session';


export default async function Authenticate() {

    console.log("middleware");
    var isSession =  (await Session.doesSessionExist());
    if (!isSession) {
          return redirect('/login');
    }


}

export const config = {
    matcher: "/api/:path", // Apply middleware to all API routes
  };




