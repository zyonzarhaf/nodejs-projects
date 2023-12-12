const http = module.require("http"),
  httpStatus = module.require("http-status-codes"),

  app = http.createServer((req, res) => {
    let body = [];
    //use curl w/ --data flag to post some data
    req.on("data", (data) => {
      body.push(data);
    });
    req.on("end", () => {
      if(body.length > 0) {
        body = Buffer.concat(body).toString();
        console.log(`Request body contents: ${body}`);
      }
    });
    res.writeHead(httpStatus.OK, {
      "Content-Type":"text/html"
    });
    res.write("<h1>Hello from home page</h1>");
    res.end();
  })
  .listen(3000, () => {
    console.log("Server is listening on port 3000");
  });
