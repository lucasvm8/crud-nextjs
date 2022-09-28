import { MongoClient } from "mongodb";

const url = process.env.MONGO_URI;
const client = new MongoClient(url);

const dbName = 'nextCrud'

export async function ConnectDB() {
    try{
    await client.connect();
    client.db(dbName).command({ ping: 1})

    console.log('Connected successfully to database');
    } catch(err) {
        console.error(err) 
    } finally {
        await client.close()
    }
}
