import "dotenv/config";
import express from "express";
import connectDB from "./config/db.js";
import cors from "cors";
import session from "express-session";
import User from "./models/mongooseModel.js";
import passport from "./strategies/googleStrategy.js";


const app = express();

// routes
import todo from "./routes/ourApi.js";
import authRoutes from "./routes/authRoutes.js";
import newUser from "./routes/loginRegisterRoutes.js";

connectDB();


// cors
app.use(cors({ origin: true, credentials: true }));

// initialize middleware
app.use(express.json({ extended: false }));

// Set up sessions and passport
app.use(
    session({
        secret: process.env.SECRET_FOR_TODO,
        resave: true,
        saveUninitialized: true,
    })
);
app.use(passport.initialize()); // Initialize passport
app.use(passport.session()); // Use passport session

app.use((req, res, next) => {
    console.log(`In server Accessing route: ${req.method} ${req.path} at ${new Date()}`);
    next();
  });
// Authorisation Step ke liye Middelware
app.use("/auth", authRoutes);

// Login yaa register ke liye Middleware
app.use("/new",newUser);


app.get("/", (req, res) => res.send("Server up and running"));


// use routes
app.use("/ourToDoApi/todo", todo);

// here is an example of a custom authenticate express middleware 
// const authenticated = (req,res,next)=>{
//     const customError = new Error('you are not logged in');
//     customError.statusCode = 401;
//     (!req.user) ? next(customError) : next();
// }

const authenticated = (err, req, res, next) => {
    if (err.status === 401) {
      // Display a custom error message to the user
      res.status(401).send('You need to log in or authorize to access this page.');
    } else {
      // Handle other errors or pass them to the default error handler
      next(err);
    }
  };

app.get("/getUser",authenticated, (req, res)=> res.send(req.user));


// setting up port
const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
    console.log(`server is running on http://localhost:${PORT}`);
});