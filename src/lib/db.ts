
import { MongoClient } from 'mongodb';
import mongoose from "mongoose"
import { config } from 'dotenv';
config()
const uri = process.env.MONGO_URI;
const dbName = process.env.MONGODB_DB;

type ConnectionObject= {
    isConnected?: number

}

const connection : ConnectionObject = {}

async function DbConnect():Promise<void>{
    if(connection.isConnected){
        console.log("Alreadu connected to DB")
        return
    }
    try {
        const db = await mongoose.connect(uri || '', {
            auth:{
                username: 'akshatmaurya25',
                password: process.env.MONGO_PASS
            }
        })
        connection.isConnected = db.connections[0].readyState
        console.log("DB connected successfully!")
    } catch (error) {
        
        console.log("Failed to connect DB", error)
        process.exit(1)
    }
}
export default DbConnect