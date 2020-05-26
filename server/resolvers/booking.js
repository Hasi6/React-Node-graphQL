const BookingDao = require("../daos/booking/BookingDao");
const bookingDao = new BookingDao();

const booking = args => {
  return bookingDao.getBooking(args._id);
};

const allBooking = (args, req) => {
  console.log(req.user);
  return bookingDao.getAllBooking();
};

const createBooking = args => {
  const { user, event } = args.bookingInput;

  const newData = { user, event };

  return bookingDao.addBooking(newData);
};

exports.booking = booking;
exports.allBooking = allBooking;
exports.createBooking = createBooking;
