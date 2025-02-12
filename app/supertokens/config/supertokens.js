//Run in terminal npm i -s supertokens-node
import supertokens from "supertokens-node";
import Session from "supertokens-node/recipe/session";
import EmailPassword from "supertokens-node/recipe/emailpassword";

supertokens.init({
    framework: "express",
    supertokens: {
        connectionURI: "https://try.supertokens.io", // Fill in 
        apiKey: "YOUR_API_KEY" // Fill in 
    },
    appInfo: {
        appName: "HabitTrackingApp", // Fill in with app name
        apiDomain: "http://localhost:3000", // Fill in with your backend API URL
        websiteDomain: "http://localhost:3000", // Fill in with your frontend URL
        apiBasePath: "/auth",
        websiteBasePath: "/auth",
    },
    recipeList: [
        EmailPassword.init(), //  signin/signup
        Session.init() // 
    ]
});

export default supertokens;
