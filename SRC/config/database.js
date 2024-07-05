
import mongoose from "mongoose";
import "dotenv/config";


export async function connectDb() {

    try {
        await mongoose.connect(process.env.DATABASE_URI)
        console.log("banco de dadoa CONECTADO")

    } catch (err) {
        console.log(err.message)

    }
}

export async function disconectDb() {
    await mongoose.disconnect();
}