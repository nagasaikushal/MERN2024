const express = require('express');
const router = express.Router();

const User = require('../models/user-model'); // Assuming your user model

// Replace with middleware for authorization (e.g., JWT verification)
router.get('/api/user-data', authenticateToken, async (req, res) => {
  try {
    const userId = req.user.id; // Assuming user ID is retrieved from authentication

    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Filter sensitive data (avoid exposing password, etc.)
    const safeUserData = {
      name: user.name,
      email: user.email,
      // Add other non-sensitive fields if needed
    };

    res.json(safeUserData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;

// Separate function for authentication middleware (replace with your implementation)
function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (token == null) return res.sendStatus(401); // Unauthorized

  // JWT verification logic (replace with your library and validation)
  jwt.verify(token, process.env.JWT_SIGNATURE, (err, user) => {
    if (err) return res.sendStatus(403); // Forbidden on invalid token

    req.user = user;
    next();
  });
}
