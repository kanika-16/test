const router = require("express").Router();
const userRoute = require("./src/user/userRoute");

let defaultRoutes = [
  {
    path: "user",
    route: userRoute,
  },
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

module.exports = router;
