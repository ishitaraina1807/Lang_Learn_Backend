// routes/questions.js
const express = require('express');
const router = express.Router();
const Question = require('../models/Question');

// Route to get all questions or questions by category
router.get('/:category?', async (req, res) => {
  try {
    const category = req.params.category;
    console.log(category)

    if (category) {
      // Fetch questions for a specific category (language)
      const questions = await Question.find({ language: category });
      res.json(questions);
    } else {
      // Fetch all questions
      const allQuestions = await Question.find();
      res.json(allQuestions);
    }
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Internal Server Error');
  }
});
router.get('/:category/:id', async (req, res, next) => {
  try {
    const { category, id } = req.params;

    // Convert the string id to ObjectId using mongoose.Types.ObjectId
    const objectId = parseInt(id);

    const question = await Question.findOne({ language: category, 'questions.id': objectId });

    if (!question || !question.questions || question.questions.length === 0) {
      return res.status(404).json({ error: `Question not found for category '${category}' and ID '${id}'` });
    }

    // Find the specific question within the questions array
    const selectedQuestion = question.questions.find(q => q.id === objectId);

    res.json(selectedQuestion);
  } catch (error) {
    console.error(error.message);
    next(error);
  }
});




module.exports = router;
