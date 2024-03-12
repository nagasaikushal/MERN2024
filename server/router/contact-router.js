const express = require("express"); // Import the Express framework for routing
const router = express.Router();
const contactForm = require("../contollers/contact-controller")

router.post('/contact', contactForm);

module.exports = router;