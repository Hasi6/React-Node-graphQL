const { events, createEvent } = require("./events");
const { users, createUser } = require("./user");
const { booking, allBooking, createBooking } = require("./booking");

const rootValue = {
  events: args => events(args),
  createEvent: args => createEvent(args),
  users: args => users(args),
  createUser: args => createUser(args),
  booking: args => booking(args),
  allBooking: (args, req) => allBooking(args, req),
  createBooking: args => createBooking(args)
};

module.exports = rootValue;
