import { MongoClient, ObjectId } from "mongodb";

export default async function handler(req, res) {
  const URL = process.env.MONGO_URI;
  const client = new MongoClient(URL);

  try{
    const database = client.db(process.env.MONGO_DB_NAME)
    const itemCollection = database.collection("Item")
    
    const findById = await itemCollection.findOne({ _id: ObjectId("63345f60c2301ad7d3e27429") });

    res.status(200).json({ success: true, data: findById })
  } catch (err) {
    console.log(err)
    res.status(500).json({ success: false })
  } finally {
    await client.close()
  }
}
