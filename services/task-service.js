const mongoose = require("mongoose");
const Task = require("../schemas/Task");

const get = async () => {
  return await Task.find({});
};

const upsert = async (input) => {
  return await Task.findOneAndUpdate(
    { _id: new mongoose.mongo.ObjectId(input.id) },
    { ...input },
    { new: true, upsert: true }
  );
};

const remove = async (id) => {
  return await Task.findOneAndUpdate(
    { _id: new mongoose.mongo.ObjectId(id) },
    { isDeleted: true },
    { new: true, upsert: true }
  );
};

module.exports = { get, upsert, remove };
