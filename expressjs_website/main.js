require("dotenv").config();
const viewsController = require("./controllers/viewsController"),
   errorController = require("./controllers/errorController"),
   Subscriber = require("./models/subscriber"),
   layouts = require("express-ejs-layouts"),
   mongoose = require("mongoose"),
   express = require("express"),
   app = express();

mongoose.connect(process.env.URI)
   .then(() => {
      console.log("Connected to the mongoDB database");
   })
   .catch((error) => console.log(error));

app.set("port", process.env.PORT || 3000);
app.set("view engine", "ejs");

app.use(layouts);
app.use(express.urlencoded({
   extended: false
}));
app.use(express.json());
app.use(express.static("public"));

app.get("/", viewsController.renderIndex);

app.get("/overview", viewsController.renderCourseModules);

app.get("/instructors", viewsController.renderInstructors);

app.get("/contact", viewsController.renderContact);

app.use(viewsController.logReqPath);
app.use(errorController.logErrors);
app.use(errorController.respondNoResourceFound);
app.use(errorController.respondInternalError);

app.listen(app.get("port"), () => {
   console.log(`Server is listening on port ${ app.get("port") }`);
});
