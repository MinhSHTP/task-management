const mongoose = require("mongoose");

module.exports = (schema) => {
  const get = async () => {
    return await schema.find({}).toArray();
  };

  const upsert = async (input) => {
    return await schema.findOneAndUpdate(
      { _id: new mongoose.mongo.ObjectId(input.id) },
      { ...input },
      { new: true, upsert: true }
    );
  };

  const remove = async (id) => {
    return await schema.findOneAndUpdate(
      { _id: new mongoose.mongo.ObjectId(id) },
      { isDeleted: true },
      { new: true, upsert: true }
    );
  };
  return { get, upsert, remove };
};
