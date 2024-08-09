const userService = require("./userService");

exports.createUser = async (req, res) => {
  try {
    let { name } = req.body;

    let user = await userService.createData({ ...req.body });
    if (!user) {
      console.log("user not created");
    }

    return res.send("OK");
  } catch (err) {
    console.log(err);
    return false;
  }
};
