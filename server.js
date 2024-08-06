const http = require("http");
const url = require("url");
const fs = require("fs");

// creating a server
const server = http.createServer((req, res) => {
  const pathName = url.parse(req.url).pathname;

  // setting routes
  if (req.method === "GET" && pathName === "/") {
    fs.readFile("index.html", (err, data) => {
      if (err) {
        res.writeHead(500, { "Content-Type": "text/plain" });
        res.write("Error found", err);
        res.end();
      } else {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(data);
        res.end();
      }
    });
  }
});

// setting a port
server.listen(2020, () => {
  console.log("Server has started running on port 2020");
});
