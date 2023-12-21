exports.renderIndex = (req, res) => {
   res.render("index", { title: "Node.js Bootcamp" }); 
}

exports.renderCourseModules = (req, res) => {
   const courseModules = [
      {
         title: "Fundamentals",
         description: `Learn the basics of Node.js and it's 
            role in server-side JavaScript development.`
      },
      {
         title: `Building RESTful APIs with node.js and 
            express.js`,
         description: `Learn the principles of RESTful
            API design and how to use Express.js to create
            and manage routes for handling HTTP requests
            and responses`
      },
      {
         title: "Data Storage and Retrieval with Mongoose",
         description: `Learn how to use Mongoose to connect
            to a MongoDB database, create and manage data models,
            and perform CRUD (Create, Read, Update, Delete)
            operations on their data.` 
      },
      {
         title: "Unit Integration and Testing",
         description: `learn how to integrate their Node.js
            applications with testing frameworks and libraries,
            ensuring that their code is robust and
            error-resistant. `
      },
   ];
   res.render("overview", { 
      title: "Course Overview", 
      courseModules:  courseModules
   });
}

exports.renderInstructors = (req, res) => {
   res.render("instructors", { title: "Our Instructors" });
}

exports.renderContact = (req, res) => {
   res.render("contact", { title: "Get in touch" });
}

exports.logReqPath = (req, res, next) => {
   console.log(`${ req.method } request made to ${ req.url }`);
   next();
}
