const http = require("http");
const url = require("url");
const fs = require("fs");
const path = require("path");
const CC = require("currency-converter-lt");

// creating a server
const server = http.createServer((req, res) => {
  const pathName = url.parse(req.url).pathname;

  // storing paths in variables for easy accessing
  const stylePath = path.join("public", "stylesheets", "style.css");
  const scriptPath = path.join("public", "javascripts", "script.js");
  const imagesPath = path.join("public", "images");

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
  } else if (req.method === "POST" && pathName === "/convert") {
    let data = "";
    // collecting data on req object
    req.on("data", (chunk) => {
      data += chunk.toString();
    });

    req.on("end", async () => {
      // parsing data in JSON string to javascript object
      const parsedData = JSON.parse(data);

      // destructuring parseddata object into different variables
      const { amount, fromCurrency, toCurrency } = parsedData;
      console.log(amount);
      console.log(fromCurrency);
      console.log(toCurrency);

      let currencyConverter = new CC({
        from: fromCurrency,
        to: toCurrency,
        amount: parseInt(amount),
      });

      currencyConverter.convert().then((data) => {
        console.log(data);
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(data.toString());
      });
    });
  } else if (
    req.method === "GET" &&
    pathName === "/public/stylesheets/style.css"
  ) {
    fs.readFile(stylePath, (err, data) => {
      if (err) {
        res.writeHead(500, { "Content-Type": "text/plain" });
        res.write("Error found", err);
        res.end();
      } else {
        res.writeHead(200, { "Content-Type": "text/css" });
        res.write(data);
        res.end();
      }
    });
  } else if (req.method === "GET" && pathName === "/public/images/usa.png") {
    fs.readFile(path.join(imagesPath, "usa.png"), (err, data) => {
      if (err) {
        res.writeHead(500, { "Content-Type": "text/plain" });
        res.write("Error found", err);
        res.end();
      } else {
        res.writeHead(200, { "Content-Type": "image/png" });
        res.write(data);
        res.end();
      }
    });
  } else if (req.method === "GET" && pathName === "/public/images/india.png") {
    fs.readFile(path.join(imagesPath, "india.png"), (err, data) => {
      if (err) {
        res.writeHead(500, { "Content-Type": "text/plain" });
        res.write("Error found", err);
        res.end();
      } else {
        res.writeHead(200, { "Content-Type": "image/png" });
        res.write(data);
        res.end();
      }
    });
  } else if (req.method === "GET" && pathName === "/public/images/europe.png") {
    fs.readFile(path.join(imagesPath, "europe.png"), (err, data) => {
      if (err) {
        res.writeHead(500, { "Content-Type": "text/plain" });
        res.write("Error found", err);
        res.end();
      } else {
        res.writeHead(200, { "Content-Type": "image/png" });
        res.write(data);
        res.end();
      }
    });
  } else if (req.method === "GET" && pathName === "/public/images/japan.png") {
    fs.readFile(path.join(imagesPath, "japan.png"), (err, data) => {
      if (err) {
        res.writeHead(500, { "Content-Type": "text/plain" });
        res.write("Error found", err);
        res.end();
      } else {
        res.writeHead(200, { "Content-Type": "image/png" });
        res.write(data);
        res.end();
      }
    });
  } else if (
    req.method === "GET" &&
    pathName === "/public/images/australia.png"
  ) {
    fs.readFile(path.join(imagesPath, "australia.png"), (err, data) => {
      if (err) {
        res.writeHead(500, { "Content-Type": "text/plain" });
        res.write("Error found", err);
        res.end();
      } else {
        res.writeHead(200, { "Content-Type": "image/png" });
        res.write(data);
        res.end();
      }
    });
  } else if (
    req.method === "GET" &&
    pathName === "/public/javascripts/script.js"
  ) {
    fs.readFile(scriptPath, (err, data) => {
      if (err) {
        res.writeHead(500, { "Content-Type": "text/plain" });
        res.write("Error found", err);
        res.end();
      } else {
        res.writeHead(200, { "Content-Type": "text/application" });
        res.write(data);
        res.end();
      }
    });
  } else if (pathName === "/favicon.ico") {
    res.writeHead(500, { "Content-Type": "text/plain" });
    res.end();
  } else {
    res.writeHead(400, { "Content-Type": "text/plain" });
    res.end("Not found");
  }
});

// setting a port
server.listen(2020, () => {
  console.log("Server has started running on port 2020");
});
