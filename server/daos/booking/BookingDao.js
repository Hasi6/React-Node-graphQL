const mongoose = require("mongoose");
const Bookings = mongoose.model("bookings");

class BookingDao {
  // Add Booking
  addBooking = async data => {
    const { user, event } = data;

    const newBooking = new Bookings({
      user,
      event
    });

    await newBooking.save();
    console.log(newBooking.populate("user", ["_id"]));
    return newBooking
      .populate("user", ["email", "password"])
      .populate("event", ["title"]);
  };

  // Get Booking
  getBooking = async id => {
    try {
      const booking = await Bookings.findById(id).populate("user", [
        "email",
        "_id"
      ]);
      console.log(booking);

      return booking;
    } catch (err) {
      console.error(err.message);
    }
  };

  // Get All Booking
  getAllBooking = async () => {
    try {
      const allBookings = await Bookings.find()
        .populate("user", ["email", "_id"])
        .populate("event", ["_id", "title", "description", "price"]);
      console.log(allBookings);
      return allBookings;
    } catch (err) {
      console.error(err.message);
    }
  };
}

module.exports = BookingDao;
