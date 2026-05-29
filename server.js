const http = require("http");

http.createServer((req, res) => {
  res.end("Version 2");
}).listen(3000);
