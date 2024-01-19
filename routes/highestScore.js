const express = require('express');
const router = express.Router();
const User = require('../models/User');

router.post('/save-highest-score', async (req, res) => {
  try {
    const { userId, highestScore } = req.body;
    // Find the user by ID
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ success: false, message: 'User not found' });
    }

    // Update the highestScore if the new score is higher
    if (highestScore > user.highestScore) {
      user.highestScore = highestScore;
      await user.save();
    }

    return res.json({ success: true, message: 'Highest score saved successfully' });
  } catch (error) {
    console.error('Error saving highest score:', error.message);
    return res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
});

module.exports = router;
