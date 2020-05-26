const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BookingSchema = new Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: "users", required: true },
    event: { type: Schema.Types.ObjectId, ref: "events", required: true }
  },
  { timestamps: true }
);

module.exports = mongoose.model("bookings", BookingSchema);
