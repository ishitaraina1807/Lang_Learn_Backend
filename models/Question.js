// models/Question.js
const mongoose = require('mongoose');
const { Schema } = mongoose;

const QuestionSchema = new Schema({
  language: String,
  questions: [{
    id: Number,
    question: String,
    options: [String],
    correctAnswer: String
  }]
}, {
  // Specify the collection name explicitly
  collection: 'Ques_Collection',
});

module.exports = mongoose.model('Question', QuestionSchema);
