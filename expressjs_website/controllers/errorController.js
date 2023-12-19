const httpStatus = require("http-status-codes");

exports.logErrors = (error, req, res, next) => {
   console.error(error.stack);
   next(error);
}

exports.respondNoResourceFound = (req, res) => {
   const errorCode = httpStatus.NOT_FOUND;
   res.status(errorCode);
   res.sendFile(`./public/${ errorCode }.html`, {
      root: "./"
   });
}

exports.respondInternalError = (error, req, res, next) => {
   let errorCode = httpStatus.INTERNAL_SERVER_ERROR;
   console.log(`An error ocurred: ${ error.stack }`);
   res.status(errorCode);
   res.sendFile(`./public/${ errorCode }.html`, {
      root: "./"
   });
}
