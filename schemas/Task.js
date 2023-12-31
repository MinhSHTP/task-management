const mongoose = require("mongoose");
const { Schema } = mongoose;
const { TASK_STATUS } = require("../utils/Constants");

const schema = new Schema(
  {
    name: { type: String },
    status: {
      type: String,
      enum: TASK_STATUS,
      default: "To Do",
    },
    isDeleted: { type: Boolean, default: false },
    updatedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
    },
    assignees: [{ type: mongoose.Schema.Types.ObjectId, ref: "user" }],
    assignedGroups: [{ type: mongoose.Schema.Types.ObjectId, ref: "group" }],
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
    },
    description: { type: String },
  },
  {
    timestamps: { createdAt: "created_at", updatedAt: "updated_at" },
  }
);

const Task = mongoose.model("tasks", schema);
module.exports = Task;
