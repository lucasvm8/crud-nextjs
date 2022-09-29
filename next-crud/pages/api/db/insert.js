import { MongoClient, ObjectId } from "mongodb";

export default async function handler(req, res) {
  const URL = process.env.MONGO_URI;
  const client = new MongoClient(URL);

  try{
    const database = client.db(process.env.MONGO_DB_NAME)
    const itemCollection = database.collection("Item")

    const person = {
      name: 'Lucas',
      email: 'lucasvm@gmail.com'
    }
    
    const insertPerson = await itemCollection.insertOne(person);
    
    res.status(200).json({ data: insertPerson })
  } catch (err) {
    console.log(err)
    res.status(500).json({ success: false })
  } finally {
    await client.close()
  }
}
