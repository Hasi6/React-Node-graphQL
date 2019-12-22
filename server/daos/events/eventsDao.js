const mongoose = require("mongoose");
const Events = mongoose.model("events");

class EventsDao {
  // Add Events
  addEvents = async data => {
    const { title, description, price } = data;

    try {
      const event = new Events({
        title,
        description,
        price
      });

      await event.save();
      return event;
    } catch (err) {
      console.error(err.message);
    }
  };

  // Get Events
  getEvents = async data => {
    try {
      const events = await Events.find();
      return events;
    } catch (err) {
      console.error(err.message);
    }
  };
}
module.exports = EventsDao;
