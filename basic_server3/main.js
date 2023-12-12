const http = module.require("http"),
  router = module.require("./router"),
  httpStatus = module.require("http-status-codes"),
  fs = module.require("fs"),

  customReadFile = (file, res) => {
    fs.readFile(`./${file}`, (error, data) => {
      if(error) {
        console.log("Error reading the file...");
      }
      res.end(data);
    });
  };

router.get("/", (req, res) => {
  res.writeHead(httpStatus.OK, {
    "Content-Type":"text/html"
  });
  customReadFile("view/index.html", res);
});

http.createServer(router.handle).listen(3000, () => {
  console.log("Server is listening on port 3000");
});
