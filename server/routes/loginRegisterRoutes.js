import express from "express";
import bodyParser from "body-parser";

const loginRegisterRouter = express.Router();

loginRegisterRouter.use(bodyParser.urlencoded({extended: true}));

/**
 * @loginRegisterRouter /new/login
 * @description take user to login page
 * @access public
 */
loginRegisterRouter.get("/login");

/**
 * @loginRegisterRouter /new/register
 * @description take logged user to signed in page view
 * @access protected
 */
loginRegisterRouter.get("/register");

export default loginRegisterRouter;