const { buildSchema } = require("graphql");

let event = [];

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

module.exports = schema;
