const mongoose = require("mongoose");
const { Schema } = mongoose;

const schema = new Schema(
  {
    username: { type: String },
    password: { type: String },
    email: { type: String },
    displayname: { type: String },
    role: { type: String },
    joined_group: [{ type: mongoose.Schema.Types.ObjectId, ref: "group" }],
    joining_group: [{ type: mongoose.Schema.Types.ObjectId, ref: "group" }],
  },
  { timestamps: { createdAt: "created_at", updatedAt: "updated_at" } }
);

const User = mongoose.model("users", schema);
module.exports = User;
