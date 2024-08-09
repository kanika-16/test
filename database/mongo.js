const mongoose = require("mongoose");
mongoose
  .connect(
    "mongodb://codioticuat:ersx2w34axeet@38.242.254.112:27017/geeks_door?authMechanism=DEFAULT&authSource=admin"
  )
  .then(async (result) => {
    console.log("database connected");
  })
  .catch((err) => {
    console.log("connection denied");
  });
