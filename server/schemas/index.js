const { buildSchema } = require("graphql");
const EventsDao = require("../daos/events/eventsDao");
const UserDao = require("../daos/user/userDao");
const BookingDao = require("../daos/booking/BookingDao");
let event = [];

const eventsDao = new EventsDao();
const userDao = new UserDao();
const bookingDao = new BookingDao();

const schema = buildSchema(`

        type User {
            _id: ID!
            email: String
            password: String
        }

        type Booking {
          _id: ID!,
          user: User,
          event: Event
        }

        type Event {
            _id: ID!,
            title: String!
            description: String!
            price: Float!
            date: String!
            user: User
        }

        input EventInput {
            title: String!
            description: String!
            price: Float!
        }

        input UserInput {
            username: String!
            email: String!
            password: String!
        }

        input BookingInput {
          user: String!,
          event: String!
        }

        type RootQuery {
            events( name: String): [Event!]!
            users(_id: String): User
            booking(_id: String): Booking
            allBooking: [Booking!]
        }

        type RootMutation {
            createEvent(eventInput: EventInput): Event
            createUser(userInput: UserInput): User
            createBooking(bookingInput: BookingInput): Booking
        }

        schema {
            query: RootQuery
            mutation: RootMutation
        }
    `);

rootValue = {
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

module.exports = { schema, rootValue };
