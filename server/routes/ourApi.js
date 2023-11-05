import express from "express";
import bodyParser from "body-parser";
import { getAllTodo, postCreateTodo, deleteTodo, putUpdateTodo } from "../controllers/routeFunctions.js";
import isAuthenticated from "../middlewares/isAuthenticated.js";

const router = express.Router();

// Isse req.body ko access karne mein koi error nahin aayega vaise express ke naye versions mein ye karne ki zaroorat nahin hai but for goodness and easy self-explanation of code hamne likh diya ye zarrori nahin hai likhna. Thik Hai.  
router.use(bodyParser.urlencoded({extended: true}));

// Isse sirf authenticated users hi hamara api access kar sakte hain. Thik hai.
router.use("/",isAuthenticated);

// Middleware function to log the route being accessed
router.use((req, res, next) => {
    console.log(`Accessing route: ${req.method} ${req.path} at ${new Date()}`);
    next();
  });

/**
 * @route GET ourToDoApi/todo
 * @description get all todo
 * @access protected
 */
router.get("/", getAllTodo);

/**
 * @route POST ourToDoApi/todo
 * @description add a new todo
 * @access protected
 */
router.post("/", postCreateTodo);

/**
 * @route PUT ourToDoApi/todo/:id
 * @description update todo
 * @access protected
 */
router.put("/:id", putUpdateTodo);

/**
 * @route DELETE ourToDoApi/todo/:id
 * @description delete todo
 * @access protected
 */
router.delete("/:id",deleteTodo);

export default router;
