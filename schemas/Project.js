const mongoose = require("mongoose");
const { Schema } = mongoose;

const schema = new Schema(
  {
    name: { type: String },
    members: [{ type: mongoose.Schema.Types.ObjectId, ref: "user" }],
    groups: [{ type: mongoose.Schema.Types.ObjectId, ref: "group" }],
    manager: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
  },
  {
    timestamps: { createdAt: "created_at", updatedAt: "updated_at" },
  }
);

const Project = mongoose.model("projects", schema);
module.exports = Project;
