const http = require("http");

const server = http.createServer((req, res) => {
  // console.log(req.url);

  if (req.url === "/home") {
    res.end("This is home page");
  } else if (req.url === "/about") {
    res.end("This is About Page");
  } else if (req.url === "/name") {
    res.end("My Name is Harshikesh Kumar");
  } else {
    res.end("Hello World");
  }
});

server.listen(3000, () => {
  console.log("Server is running on http://localhost:300");
});
