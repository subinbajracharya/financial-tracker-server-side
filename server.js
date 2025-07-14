import express from "express"
import cors from "cors"
import dotenv from "dotenv"
dotenv.config()
import mongoConnection from "./config/mongoConfig.js";
import { loginUser, registerUser } from "./controllers/authControllers.js";

const app = express();
const PORT = process.env.PORT || 4000

// cors
app.use(cors())

// request body
app.use(express.json())

// Routes
// base get api
app.get("/", (req, res) => {
    res.json({
        status: true,
        message: "Financial Tracker API"
    })
})

// AUTH
// POST request to register users
app.post("/api/v1/auth", registerUser)

// Login user
app.post("/api/v1/auth/login", loginUser)

// mongo connection
mongoConnection()
    .then(() => {
        console.log("MONGO CONNECTION SUCCESS!!")
        // listener
        app.listen(PORT, (err) => {
            if (err) {
                console.log("SERVER STARTING ERROR!")
            } else {
                console.log("SERVER STARTED AT PORT: ", PORT)
            }
        });
    })
    .catch((err) => {
        console.log("MONGO CONNECTION ERROR")
        console.log(err.message)
    })
