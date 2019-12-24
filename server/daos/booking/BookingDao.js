const mongoose = require("mongoose");
const Bookings = mongoose.model("bookings");

class BookingDao {
  // Add Booking
  addBooking = async data => {
    const { user, event } = data;

    const newBooking = new Booking({
      user,
      event
    });

    await newBooking.save();

    return newBooking;
  };

  // Get Booking
  getBooking = async id => {
    try {
      const booking = await Bookings.findById(id);
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
      return allBookings;
    } catch (err) {
      console.error(err.message);
    }
  };
}

module.exports = BookingDao;
