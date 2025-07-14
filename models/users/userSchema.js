import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true
        },
        email: {
            type: String,
            unique: true,
            required: true,
        },
        password: {
            type: String,
            required: true
        },
        // phone: {
        //     type: Number,
        // },
        // role: {
        //     type: String,
        //     default: "customer"
        // }
    },
    {
        timestamps: true
    }
)

export default userSchema;