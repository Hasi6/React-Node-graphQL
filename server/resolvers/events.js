const EventsDao = require("../daos/events/eventsDao");

const eventsDao = new EventsDao();

const events = async args => {
  try {
    const res = await eventsDao.getEvents();
    return res;
  } catch (err) {
    console.error(err.message);
  }
};

const createEvent = async args => {
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
};

exports.events = events;
exports.createEvent = createEvent;
