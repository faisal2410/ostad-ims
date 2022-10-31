const User = require("../models/user");

exports.signupService = async (userInfo) => {
    const user = await User.create(userInfo);
    return user;
  };