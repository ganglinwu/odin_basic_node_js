const http = require("http");
const url = require("url");
const fs = require("fs");

const PORT = process.env.PORT || 3000;

// create server
const server = http.createServer(async (req, res) => {
  const q = url.parse(req.url, true);
  pathname = q.pathname;

  if (pathname === "/") {
    res.end(fs.readFileSync("./pages/index.html"));
  } else if (pathname === "/about.html") {
    res.end(fs.readFileSync("./pages/about.html"));
  } else if (pathname === "/contact-me.html") {
    res.end(fs.readFileSync("./pages/contact-me.html"));
  } else {
    res.end(fs.readFileSync("./pages/404.html"));
  }
});

// listen
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT} in ${process.env.MODE} mode`);
});
