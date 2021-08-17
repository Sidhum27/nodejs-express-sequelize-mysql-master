module.exports = app => {
  const employee = require("../controllers/employee.controller.js");

  var router = require("express").Router();

  // Create a new Tutorial
  router.post("/Create", employee.create);

  // Retrieve all Tutorials
  router.get("/", employee.findAll);

  // Retrieve all published Tutorials

  // Retrieve a single Tutorial with id
  router.get("/getbyid:id", employee.findOne);

  // Update a Tutorial with id
  router.put("/update:id", employee.update);

  // Delete a Tutorial with id
  router.delete("/delete:id", employee.delete);

  app.use('/api/employee', router);
};
