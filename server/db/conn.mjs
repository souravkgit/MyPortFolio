import { MongoClient } from "mongodb";

const connectionString = process.env.ATLAS_URI || "";
console.log(connectionString);
const client = new MongoClient(connectionString);

let conn;
try {
    conn = await client.connect();
    console.log("Connected to MongoDB successfully!");
} catch (e) {
    console.error("Error connecting to MongoDB:", e);
}

let db = conn.db("myportfolio");
// console.log(db);
export default db;
