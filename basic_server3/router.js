const httpStatus = module.require("http-status-codes"),
  routes = {
  "GET": {},
  "POST": {}
};

module.exports.handle = (req,res) => {
  try {
    if(!routes[req.method][req.url]) {
      res.writeHead(httpStatus.NOT_FOUND, {
        "Content-Type":"text/html"
      });
      res.write("<h1>Resource not found</h1>");
      res.end();
      return;
    }
    routes[req.method][req.url](req,res);
  } catch (error) {
    console.log(error);
  }
}

module.exports.get = (url,action) => {
  routes["GET"][url] = action;
}

module.exports.post = (url,action) => {
  routes["POST"][url] = action;
}
