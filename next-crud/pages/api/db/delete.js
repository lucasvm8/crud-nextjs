import { MongoClient, ObjectId } from "mongodb";

export default async function handler(req, res) {
  const URL = process.env.MONGO_URI;
  const client = new MongoClient(URL);

  let msg

  try{
    const database = client.db(process.env.MONGO_DB_NAME)
    const itemCollection = database.collection("Item")
    
    const query = { name: 'Lucas' }

    const result = await itemCollection.deleteOne(query);


    result.deletedCount === 1 
    ? msg = "Successfully deleted one document." 
    : msg = "No documents matched the query. Deleted 0 documents."

    res.status(200).json({ success: true, data: msg })
  } catch (err) {
    console.log(err)
    res.status(500).json({ success: false })
  } finally {
    await client.close()
  }
}
