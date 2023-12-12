const http = module.require("http"),
  httpStatus = module.require("http-status-codes"),
  
  app = http.createServer((req, res) => {
    res.writeHead(httpStatus.OK, {
      "Content-Type":"text/html"
    });
    res.write("<h1>Hello from home page</h1>");
    res.end();
  })
  .listen(3000, (req) => {
    console.log("Server is listening on port 3000");
  });
