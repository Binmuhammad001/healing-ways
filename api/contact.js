
import { MongoClient } from "mongodb";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Only POST requests allowed" });
  }

  try {
    const client = await MongoClient.connect(process.env.MONGODB_URI);
    const db = client.db("healingways");        // database name
    const messages = db.collection("messages"); // collection to store contact messages

    await messages.insertOne(req.body);

    return res.status(200).json({ success: true, message: "Message received successfully" });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ success: false, message: "Error saving message" });
  }
}
