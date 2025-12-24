import mongoose from 'mongoose';
import Contact from '../models/Contact.js';

let isConnected = false;

async function connectDB() {
  if (isConnected) return;
  await mongoose.connect(process.env.MONGO_URI);
  isConnected = true;
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  await connectDB();

  try {
    const contact = new Contact(req.body);
    await contact.save();

    res.status(201).json({ message: 'Form submitted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error saving data' });
  }
}
