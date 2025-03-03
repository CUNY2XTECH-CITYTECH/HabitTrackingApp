//Run in terminal npm i -s supertokens-node
import supertokens from "supertokens-node";
import Session from "supertokens-node/recipe/session";
import EmailPassword from "supertokens-node/recipe/emailpassword";
import {appInfo} from "./appInfo";

// import UserMetadata from "supertokens-node/recipe/usermetadata";

let backendSuperTokenInit = false; 

//this makes sure that supertoken in the backend is initialized. 
//This needs to happen before api call. 
if(!backendSuperTokenInit)
{
supertokens.init({
    framework: "custom",
    supertokens: {
        connectionURI: "http://localhost:3567",
        //apiKey: "YOUR_API_KEY" // 
    },
    appInfo,
    recipeList: [
        EmailPassword.init(), //  signin/signup
        Session.init() // 
    ]
});

backendSuperTokenInit = true;
}



export default supertokens;
