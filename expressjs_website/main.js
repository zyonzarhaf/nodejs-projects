const port = 3000,
   viewsController = require("./controllers/viewsController"),
   errorController = require("./controllers/errorController"),
   layouts = require("express-ejs-layouts");
   express = require("express"),
   app = express();

app.set("port", process.env.PORT || 3000);
app.set("view engine", "ejs");

app.use(layouts);
app.use(express.urlencoded({
   extended: false
}));
app.use(express.json());

app.get("/", (req, res) => {
   viewsController.renderView("index", "Node.js Course", req, res);
});

app.get("/overview", (req, res) => {
   viewsController.renderView("overview", "Course Overview", req, res);
});

app.get("/instructors", (req, res) => {
   viewsController.renderView("instructors", "Our Instructors", req, res);
});

app.get("/contact", (req, res) => {
   viewsController.renderView("contact", "Get in Touch", req, res);
});

app.use(viewsController.logReqPath);
app.use(errorController.logErrors);
app.use(errorController.respondNoResourceFound);
app.use(errorController.respondInternalError);

app.listen(port, () => {
   console.log(`Server is listening on port ${ app.get("port") }`);
});
