const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      trim: true,
      minlength: 2
    },
    rollNumber: {
      type: String,
      required: [true, "Roll number is required"],
      trim: true,
      unique: true
    },
    branch: {
      type: String,
      required: [true, "Branch is required"],
      trim: true
    },
    year: {
      type: Number,
      required: [true, "Year is required"],
      min: 1,
      max: 4
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      trim: true,
      lowercase: true,
      match: [/^\\S+@\\S+\\.\\S+$/, "Enter a valid email"]
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Student", studentSchema);