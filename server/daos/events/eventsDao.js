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
        price,
        user: "5df3e2fcd17b932d68fa4de6"
      });

      await event.save();
      return event.populate("user", ["email", "_id"]);
    } catch (err) {
      console.error(err.message);
    }
  };

  // Get Events
  getEvents = async data => {
    try {
      const events = await Events.find().populate("user", ["_id", "email"]);
      console.log(events);
      return events;
    } catch (err) {
      console.error(err.message);
    }
  };
}
module.exports = EventsDao;
