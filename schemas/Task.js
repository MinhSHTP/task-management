const mongoose = require("mongoose");
const { Schema } = mongoose;
const { TASK_STATUS } = require("../utils/Constants");
const schema = Schema(
  {
    name: { type: String },
    status: {
      type: String,
      enum: TASK_STATUS,
      default: "To Do",
    },
    isDeleted: { type: Boolean, default: false },
  },
  {
    timestamps: { createdAt: "created_at", updatedAt: "updated_at" },
  }
);

const Task = mongoose.model("task", schema);
module.exports = Task;
