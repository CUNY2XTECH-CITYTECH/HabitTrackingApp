import express from "express";
import { verifySession } from "supertokens-node/recipe/session/framework/express";

const router = express.Router();

router.get("/dashboard", verifySession(), (req, res) => {
    let userId = req.session.getUserId();
    res.json({ message: "Welcome", userId });
});

export default router;
