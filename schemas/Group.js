const mongoose = require("mongoose");
const { Schema } = mongoose;

const schema = new Schema(
  {
    name: { type: String },
    members: [{ type: mongoose.Schema.Types.ObjectId, ref: "user" }],
    manager: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
  },
  { timestamps: { createdAt: "created_at", updatedAt: "updated_at" } }
);

const Group = mongoose.model("groups", schema);
module.exports = Group;
