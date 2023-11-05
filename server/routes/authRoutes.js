import express from "express";
import bodyParser from "body-parser";
import passport from "../strategies/googleStrategy.js";

const authRouter = express();

authRouter.use(bodyParser.urlencoded({ extended: true }));

/**
 * @authRouter /auth/google
 * @description login user by google
 * @access public
 */
authRouter.get("/google", passport.authenticate("google", { scope: ["profile"] }));


/**
 * @authRouter /auth/google/callback
 * @description take logged user to signed in page view
 * @access protected
 */
authRouter.get("/google/secrets", await passport.authenticate("google", { failureRedirect: "/login" }),
    function (req, res) {
        // Successful authentication, redirect home.
        console.log("User is authenticated with OAuth2.0 Google");
        res.redirect("/ourToDoApi/todo");
    });

export default authRouter;