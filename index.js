const http = require("http");
const app = require("./app");
const server = http.createServer(app);

server.listen("2000", async () => {
  console.log("server is listening on port 2000");
});
