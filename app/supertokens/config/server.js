//important
//Add the middleware BEFORE all your routes.
//Add the cors middleware BEFORE the SuperTokens middleware.

import express from "express";
import cors from "cors";
import supertokens from "./config/supertokens.js"; // Import theSuperTokens config
import { middleware } from "supertokens-node/framework/express";
import { errorHandler } from "supertokens-node/framework/express";

const app = express();

//"Cross-Origin Resource Sharing" CORS settings should be updated to allow the use of the authentication headers required by SuperTokens.
app.use(
    cors({
        origin: "http://localhost:3000 ", // Fill in with th frontend URL
        allowedHeaders: ["content-type", ...supertokens.getAllCORSHeaders()],
        credentials: true,
    })
);

// CORS should be before the SuperTokens middleware.
app.use(middleware()); // SuperTokens middleware

// Start server
const PORT = process.env.PORT || 3000; // Fill in this with a port
app.listen(PORT, () => {
    console.log(`The Server is running on http://localhost:3000 `);
});





