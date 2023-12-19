exports.renderView = (view, title, req, res) => {
   res.render(view, { title: title }); 
}

exports.logReqPath = (req, res, next) => {
   console.log(`${ req.method } request made to ${ req.url }`);
   next();
}
