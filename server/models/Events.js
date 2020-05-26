const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const eventSchema = new Schema({
  title: { type: String, required: true },
  user: { type: Schema.Types.ObjectId, ref: "users", required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  date: { type: String, default: Date.now }
});

module.exports = mongoose.model("events", eventSchema);
