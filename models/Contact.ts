// models/Contact.ts
import { Schema, models, model } from "mongoose";

const ContactSchema = new Schema(
  {
    firstName: { type: String, required: true, trim: true },
    lastName: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true },
    message: { type: String, required: true, trim: true },
    phone: { type: String, default: "" },
  },
  { timestamps: true }
);

// Avoid OverwriteModelError in dev
export const Contact = models.Contact || model("Contact", ContactSchema);
