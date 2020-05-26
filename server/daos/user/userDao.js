const mongoose = require("mongoose");
const User = mongoose.model("users");

class UserDao {
  // Add User
  addUser = async newUser => {
    const { email, password, username } = newUser;

    try {
      const user = new User({
        email,
        password,
        username
      });

      await user.save();

      return user;
    } catch (err) {
      console.error(err.message);
    }
  };

  // Get User
  getUser = async _id => {
    try {
      const user = await User.findById(_id).select("-password");
      return user;
    } catch (err) {
      console.error(err.message);
    }
  };
}

module.exports = UserDao;
