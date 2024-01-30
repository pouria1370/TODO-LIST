import mongoose, { Schema } from "mongoose";

interface model {
  s: object;
  v: object;
}

const todoSchema = new Schema(
  {
    description: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Todo = mongoose.models.Todo || mongoose.model("Todo", todoSchema);
export default Todo;
