const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = process.env.PORT || 3000;

const publicFolder = path.join(__dirname, "public");

const server = http.createServer((req, res) => {
  let url = req.url;

  if (url === "/") {
    url = "/index.html";
  }

  const filePath = path.join(publicFolder, url);

  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(404, {
        "Content-Type": "text/plain; charset=utf-8"
      });
      res.end("Not Found");
      return;
    }

    let contentType = "text/html";

    if (filePath.endsWith(".css")) {
      contentType = "text/css";
    }

    if (filePath.endsWith(".js")) {
      contentType = "text/javascript";
    }

    if (filePath.endsWith(".jpg") || filePath.endsWith(".jpeg")) {
      contentType = "image/jpeg";
    }

    if (filePath.endsWith(".png")) {
      contentType = "image/png";
    }

    res.writeHead(200, {
      "Content-Type": contentType
    });

    res.end(data);
  });
});

server.listen(PORT, "0.0.0.0", () => {
  console.log(`Website running on port ${PORT}`);
});
