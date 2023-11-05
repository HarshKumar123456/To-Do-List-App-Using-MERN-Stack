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

// Authorisation Step ke liye Middelware
app.use("/auth", authRoutes);

// Login yaa register ke liye Middleware
app.use("/new",newUser);


app.get("/", (req, res) => res.send("Server up and running"));

// use routes
app.use("/ourToDoApi/todo", todo);

// setting up port
const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
    console.log(`server is running on http://localhost:${PORT}`);
});