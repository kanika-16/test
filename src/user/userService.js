const user = require("./userSchema");

const createData = async (insertData) => {
  return user.create({ ...insertData });
};

module.exports = { createData };
