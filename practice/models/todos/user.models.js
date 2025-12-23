import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
  username: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: [true, "Password is required"],
    min: [6, 'Password should be at least 6 characters long, got {VALUE}'],
    max: 12
  },
  isActive: Boolean,
    },  { timestamps: true }
);

export const User = mongoose.model("User", userSchema);
