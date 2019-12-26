const express = require("express");
const socketio = require("socket.io");
const http = require("http");
const connectDB = require("./config/db");
const graphQLHttp = require("express-graphql");

const app = express();

// INIT MIDDLEWARE
app.use(
  express.json({
    extended: true
  })
);

// MODELS
require("./models/Events");
require("./models/Users");
require("./models/Booking");

// Database Connection
connectDB();

const schema = require("./schemas");
const rootValue = require("./resolvers");
// Graphql
app.use(
  "/graphiql",
  graphQLHttp({
    schema,
    rootValue,
    graphiql: true
  })
);

// SERVER CREATE
const PORT = process.env.PORT || 5000;

const server = http.createServer(app);
const io = socketio(server);
server.listen(PORT, () => console.log(`App Started at port ${PORT}`));

// SOCKET IO LOGIC

// REQUESTS

// GET

// POST

// UPDATE

// DELETE
