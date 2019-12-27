const UserDao = require("../daos/user/userDao");
const userDao = new UserDao();

const users = args => {
  return userDao.getUser(args._id);
};

const createUser = args => {
  const newUser = {
    username: args.userInput.username,
    email: args.userInput.email,
    password: args.userInput.password
  };

  return userDao.addUser(newUser);
};

exports.users = users;
exports.createUser = createUser;
