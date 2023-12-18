const httpStatus = require("http-status-codes"),
contentTypes = require("./contentTypes"),
utils = require("./utils"),

routes = {
   "GET": {},
   "POST": {}
};

exports.handle = (req, res) => {
   try {
      routes[req.method][req.url](req, res);
   } catch (error) {
      res.writeHead(httpStatus.NOT_FOUND,
         contentTypes.html);
      utils.getFile("views/error.html", res);
   }
};

exports.get = (url, action) => {
   routes["GET"][url] = action;
};

exports.post = (url, action) => {
   routes["POST"][url] = action;
};
