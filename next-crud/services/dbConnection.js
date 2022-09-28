import { MongoClient } from "mongodb";

const url = process.env.MONGO_URI;
const client = new MongoClient(url);

export async function ConnectDB() {
    try{
    await client.connect();
    client.db(process.env.MONGO_DB_NAME).command({ ping: 1})

    console.log('Connected successfully to database');
    } catch(err) {
        console.error(err) 
    } finally {
        await client.close()
    }
}
