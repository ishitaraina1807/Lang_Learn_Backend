// models/Question.js
const mongoose = require('mongoose');
const { Schema } = mongoose;

const QuestionSchema = new Schema({
  category: {
    type: String,
    required: true,
    enum: ['english', 'spanish'],
  },
  difficulty: {
    type: String,
    required: true,
    enum: ['easy', 'medium', 'hard'],
  },
  question: {
    type: String,
    required: true,
  },
  options: {
    type: [String],
    required: true,
  },
  correctAnswer: {
    type: String,
    required: true,
  },
}, {
  // Specify the collection name explicitly
  collection: 'Ques_Collection',
});

module.exports = mongoose.model('Question', QuestionSchema);
