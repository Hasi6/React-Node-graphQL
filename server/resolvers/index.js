const EventsDao = require("../daos/events/eventsDao");
const UserDao = require("../daos/user/userDao");
const BookingDao = require("../daos/booking/BookingDao");

const eventsDao = new EventsDao();
const userDao = new UserDao();
const bookingDao = new BookingDao();

const rootValue = {
  events: async args => {
    try {
      const res = await eventsDao.getEvents();
      return res;
    } catch (err) {
      console.error(err.message);
    }
    return event;
  },
  createEvent: async args => {
    try {
      const newEvent = {
        title: args.eventInput.title,
        description: args.eventInput.description,
        price: args.eventInput.price
      };
      const res = await eventsDao.addEvents(newEvent);
      return res;
    } catch (err) {
      console.error(err.message);
    }
  },
  users: args => {
    return userDao.getUser(args._id);
  },
  createUser: args => {
    const newUser = {
      username: args.userInput.username,
      email: args.userInput.email,
      password: args.userInput.password
    };

    return userDao.addUser(newUser);
  },
  booking: args => {
    return bookingDao.getBooking(args._id);
  },
  allBooking: () => {
    return bookingDao.getAllBooking();
  },
  createBooking: args => {
    const { user, event } = args.bookingInput;

    const newData = { user, event };

    return bookingDao.addBooking(newData);
  }
};

module.exports = rootValue;
