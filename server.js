import express from "express";
import bcrypt from "bcryptjs";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config()

import mongoConnection from "./config/mongoConfig.js";

const app = express();
const PORT = process.env.PORT || 3000

app.use(cors())
// request body
app.use(express.json())

// base get api
app.get("/", (req, res) => {
    res.json({
        status: true,
        message: "Financial Tracker API"
    })
})

mongoConnection()
    .then(() => {
        console.log("MONGO CONNECTION SUCCESS!!")
        // listener
        app.listen(PORT, (err) => {
            if (err) {
                console.log("SERVER STARTING ERROR!")
            } else {
                console.log("server STARTED AT PORT: ", PORT)
            }
        });
    })
    .catch((err) => {
        console.log("MONGO CONNECTION ERROR")
        console.log(err.message)
    })
