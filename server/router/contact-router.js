const express = require("express"); // Import the Express framework for routing
const router = express.Router();
const contactForm = require("../contollers/contact-controller")

router.route("/contact").post(contactForm);

module.exports = router;