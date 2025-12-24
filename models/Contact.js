import mongoose from "mongoose";

const ContactSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true },
    lastName:  { type: String, required: true },
    email:     { type: String, required: true },
    phoneNumber: { type: String },
    comments: { type: String },
    country: { type: String }
  },
  { timestamps: true } // Adds createdAt & updatedAt automatically
);

export default mongoose.models.Contact || mongoose.model("Contact", ContactSchema);
