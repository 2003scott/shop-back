import mongoose from "mongoose";
import { env } from "./env.js";

export default (async () => {
    try {
        const db = await mongoose.connect(`mongodb+srv://${env.DB_USER}:${env.DB_PASSWORD}@${env.DB_CLUSTER}/${env.DB_NAME}`)
        console.log(`Database is connected to ${db.connection.name}`)
    } catch (error) {
        console.error(error)
        throw new Error(error)
    }
})()