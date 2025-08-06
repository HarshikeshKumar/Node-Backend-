const http = require("http");
const server = http.createServer();

server.listen(3000, () => {
  console.log("Server is running on http://localhost:300");
});
