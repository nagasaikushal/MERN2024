const express = require("express"); // Import the Express framework for routing
const router = express.Router(); // Create a new router instance
const autocontollers = require("../contollers/auth-controllers"); // Import the controller for the home route
const signup = require("../validators/auth-validator")
const validate = require("../middleware/Validate-middleware")

router.route("/me").get(autocontollers.home);

router.route("/reg").post(validate(signup), autocontollers.register);

router.route("/login").post(autocontollers.login);

module.exports = router;