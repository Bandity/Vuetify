import * as mongodb from "mongodb";
import dotenv from "dotenv"
dotenv.config();

const url =  process.env.MONGODB_URL!
const username = process.env.MONGODB_USER!
const password = process.env.MONGODB_PASSWORD!


export const databaseClient = new mongodb.MongoClient(url)