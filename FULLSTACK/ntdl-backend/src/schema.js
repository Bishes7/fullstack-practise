import mongoose, { Schema } from "mongoose";

const taskSchema = new mongoose.Schema(
  {
    task: {
      type: String,
      required: true,
    },

    hours: {
      type: Number,
      min: 1,
      max: 100,
      required: true,
    },

    type: {
      type: String,
      default: "entry",
      enum: ["entry", "bad"],
    },
  },
  { timestamps: true }
);

const collectionName = mongoose.model("tasks", taskSchema);

// Using CRUD Methods

// GET
export const getTask = () => {
  return collectionName.find();
};

// POST
export const postTask = (obj) => {
  return collectionName(obj).save();
};

// PATCH
export const patchTask = (_id, rest) => {
  return collectionName.findByIdAndUpdate(_id, rest, {
    new: true,
  });
};

// DELETE
export const deleteTask = (_id) => {
  return collectionName.findByIdAndDelete(_id);
};
