// index.js
const connectToMongo = require("./db");
const express = require("express");
const app = express();
const port = 4000;
const cors = require('cors');

// Available routes
app.use(cors());
app.use(express.json());

// Import and use the auth route
app.use("/api/auth", require("./routes/auth"));

// Import and use the questions route
app.use("/api/questions", require("./routes/questions"));

app.get("/api/questions/english", async (req, res) => {
  try {
    const db = await connectToMongo();
    const collection = db.collection("Ques_Collection"); // Replace with your actual collection name

    // Fetch all data from the collection
    const data = await collection.find({}).toArray();

    // Filter only English questions
    const englishQuestions = data[0].english;

    console.log('Fetched English questions:', englishQuestions);
    res.json(englishQuestions);
  } catch (err) {
    console.error('Error fetching English questions', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Notebox-backend listening on port ${port}`);
});

// Connect to MongoDB
connectToMongo();
