const { buildSchema } = require("graphql");
const EventsDao = require("../daos/events/eventsDao");
let event = [];

const eventsDao = new EventsDao();

const schema = buildSchema(`

        type User {
            _id: ID!
            email: String!
            password: String!
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

        type RootQuery {
            events( name: String): [Event!]!
        }

        type RootMutation {
            createEvent(eventInput: EventInput): Event
            createUser(name: String): String
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
  createUser: args => {
    return args.name;
  }
};

module.exports = { schema, rootValue };
