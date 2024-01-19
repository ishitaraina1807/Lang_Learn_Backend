// questions.js
const express = require('express');
const router = express.Router();
const Question = require('../models/Question');

// Route to get all questions
router.get('/', async (req, res) => {
  try {
    const questions = await Question.find();
    res.json(questions);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Internal Server Error');
  }
});

module.exports = router;
