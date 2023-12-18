const port = 3000,
   http = require("http"),
   httpStatus = require("http-status-codes"),
   router = require("./router"),
   contentTypes = require("./contentTypes"),
   utils = require("./utils");

router.get("/", (req, res) => {
   res.writeHead(httpStatus.OK, contentTypes.html);
   utils.getFile("views/index.html", res);  
});

router.get("/overview", (req, res) => {
   res.writeHead(httpStatus.OK, contentTypes.html);
   utils.getFile("views/overview.html", res);
});

router.get("/instructors", (req, res) => {
   res.writeHead(httpStatus.OK, contentTypes.html);
   utils.getFile("views/instructors.html", res);
});

router.get("/contact", (req, res) => {
   res.writeHead(httpStatus.OK, contentTypes.html);
   utils.getFile("views/contact.html", res);
});

router.get("/css/styles.css", (req, res) => {
   res.writeHead(httpStatus.OK, contentTypes.css);
   utils.getFile("public/css/styles.css", res);
});

router.get("/css/bootstrap.css", (req, res) => {
   res.writeHead(httpStatus.OK, contentTypes.css);
   utils.getFile("public/css/bootstrap.css", res);
});

router.get("/js/app.js", (req, res) => {
   res.writeHead(httpStatus.OK, contentTypes.js);
   utils.getFile("public/js/app.js", res);
});

router.get("/js/bootstrap.js", (req, res) => {
   res.writeHead(httpStatus.OK, contentTypes.js);
   utils.getFile("public/js/bootstrap.js", res);
});

router.get("/images/nodejs.png", (req, res) => {
   res.writeHead(httpStatus.OK, contentTypes.png);
   utils.getFile("public/images/nodejs.png", res);
});

http.createServer(router.handle).listen(port, () => {
   console.log(`Server is listening on port ${port}`);
});

