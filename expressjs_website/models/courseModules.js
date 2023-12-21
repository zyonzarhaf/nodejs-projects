const mongoose = require("mongoose");

const courseModulesSchema = mongoose.Schema({
   title: String,
   description: String,
   duration: String
});

modules.export = mongoose.model("CourseModules", courseModulesSchema);
