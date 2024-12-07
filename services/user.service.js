const USER_MODEL = require("../models/user.model");

module.exports.createUser = async ({
  firstname,
  lastname,
  email,
  password,
}) => {
  if (!firstname || !email || !password) {
    throw new Error("All fields are required");
  }

  const user = await USER_MODEL.create({
    fullname: {
      firstname,
      lastname,
    },
    email,
    password,
  });

  return user;
};
